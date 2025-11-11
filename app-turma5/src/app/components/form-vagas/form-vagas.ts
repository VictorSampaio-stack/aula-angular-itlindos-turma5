import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PedidoVaga } from '../../models/pedido-vaga';
import { FormsModule } from '@angular/forms';
import { VagasService } from '../../services/vagas-service';
// import { DepartamentoService } from '../../services/departamento-service';
// import { TipoDepartamento } from '../../models//tipo-departamento';
import { GestorService } from '../../services/gestor-service';
import { TipoGestor } from '../../models/tipo-gestor';

@Component({
  selector: 'app-form-vagas',
  imports: [FormsModule],
  templateUrl: './form-vagas.html',
  styleUrl: './form-vagas.scss',
})
export class FormVagas implements OnInit {
  constructor(private rota: ActivatedRoute, private serviceVagas: VagasService, private serviceDepartamentos: GestorService) { }
  ngOnInit(): void {
    this.verificarEdicaoOuCriar()
    this.carregarGestores()
  }

  arrayGestores: WritableSignal<TipoGestor[]> = signal([])
  carregarGestores(): void {
    this.serviceDepartamentos.getGestores().subscribe({
      next: respostaReq => {
        this.arrayGestores.set(respostaReq)
      },
      error: erro => console.log(erro)
    })
  }

  private novaVaga = false
  titulo = ''

  verificarEdicaoOuCriar() {
    let param = this.rota.snapshot.paramMap.get('id')
    if (param == 'novaVaga') {
      console.log('Criar')
      this.titulo = 'Cadastro de Vaga'
      this.novaVaga = true
    } else {
      console.log('Editar')
      this.titulo = 'Edição de Vaga'

    }
  }

  obj: PedidoVaga = {
    titulo: '',
    motivo: '',
    requisitos: [],
    quantidade: 1,
    aprovacao: 'Pendente',
    gestorId: '',
    dataSolicitacao: ''
  }

  // addReqs(req: string): void {
  //   this.obj.requisitos.push(req)
  //   alert('Requsito Adicionado!')
  // }


  fazerRequisicaoForm(): void {
    const data = new Date();
    this.obj.dataSolicitacao = data.toISOString();

    if (this.novaVaga === true) {
      this.serviceVagas.postPedidoVagas(this.obj).subscribe({
        next: novoItem => {
          alert('Nova vaga adicionada');
        },
        error: erro => {
          console.error('Erro no POST:', erro);
        }
      });
    } else {
      const idParaEdit = this.rota.snapshot.paramMap.get('id');
      if (!idParaEdit) {
        console.error('id não encontrado na rota');
        return;
      }

      this.serviceVagas.putPedidoVagas(this.obj, idParaEdit).subscribe({
        next: edicao => {
          alert('Vaga editada',);
        },
        error: erro => {
          console.log('Erro no PUT:', erro);
        }
      });
    }
  }

}



