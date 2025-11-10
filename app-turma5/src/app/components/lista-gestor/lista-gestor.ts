import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { PedidoVaga } from '../../models/pedido-vaga';
import { TipoGestor } from '../../models/tipo-gestor';
import { VagasService } from '../../services/vagas-service';
import { GestorService } from '../../services/gestor-service';
import { TipoDepartamento } from '../../models/tipo-departamento';
import { DepartamentoService } from '../../services/departamento-service';

@Component({
  selector: 'app-lista-gestor',
  imports: [],
  templateUrl: './lista-gestor.html',
  styleUrl: './lista-gestor.scss',
})
export class ListaGestor implements OnInit {
  contador: WritableSignal<number> = signal(0);

  nomes: string[] = []

  listaGestores: WritableSignal<TipoGestor[]> = signal([])

   listaDepartamentos: WritableSignal<TipoDepartamento[]> = signal([])

  constructor(
    private gestorService: GestorService,
    private departamentoService: DepartamentoService,
  ) { }

  ngOnInit(): void {
    this.carregaGestores()
  }

  carregaGestores(): void {
    this.gestorService.getGestores().subscribe({
      next: respostaGestores => {
        this.listaGestores.set(respostaGestores)
      }, error: error => {
        console.log(error)
      }
    })
  }
  carregaDeps(): void {
    this.departamentoService.getDeps().subscribe({
      next: respostaDeps => {
        this.listaDepartamentos.set(respostaDeps)
      }, error: error => {
        console.log(error)
      }
    })
  }
  // buscaDepartamento(id: string): string {
  //   let gestorEncontrado = this.gestores().find(g => g.id == id)
  //   if (gestorEncontrado) {
  //     return gestorEncontrado.nome
  //   } else {
  //     return 'N/A'
  //   }
  // }
}
