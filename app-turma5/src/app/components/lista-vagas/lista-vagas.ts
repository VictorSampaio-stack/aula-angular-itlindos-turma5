import { Component, OnInit, signal, WritableSignal } from '@angular/core';

import { VagasService } from '../../services/vagas-service';
import { GestorService } from '../../services/gestor-service';

import { PedidoVaga } from '../../models/pedido-vaga';
import { TipoGestor } from '../../models/tipo-gestor';

// Para utilizar o Pipe de data
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-vagas',
  imports: [CommonModule],
  templateUrl: './lista-vagas.html',
  styleUrl: './lista-vagas.scss',
})
export class ListaVagas implements OnInit {

  contador: WritableSignal<number> = signal(0);

  nomes: string[] = []

  pedidoVagas: WritableSignal<PedidoVaga[]> = signal([])
  gestores: WritableSignal<TipoGestor[]> = signal([])

  constructor(
    private vagasService: VagasService,
    private gestorService: GestorService
  ) { }

  ngOnInit(): void {
    this.carregaGestores()
    this.carregarPedidos()
  }

  add(): void {
    this.contador.update(valorAntigo => valorAntigo + 1)
  }

  carregarPedidos(): void {
    this.vagasService.getPedidosVagas().subscribe({
      next: data => {
        console.log(data)
        this.pedidoVagas.set(data)
      }, error: error => {
        console.log(error)
      }
    })
  }

  carregaGestores(): void {
    this.gestorService.getGestores().subscribe({
      next: respostaGestores => {
        this.gestores.set(respostaGestores)
      }, error: error => {
        console.log(error)
      }
    })
  }

  converteData(iso: string): string {
    let d = new Date(iso)
    return d.toLocaleDateString('pt-br')
  }

  voltaClasseStatus(status: string): string {
    switch (status) {
      case 'Aprovado':
        return 'verde'
      case 'Pendente':
        return 'amarelo'
      case 'Reprovado':
        return 'vermelho'
      default:
        return ''
    }
  }

  buscaGestor(id: string): string {
    let gestorEncontrado = this.gestores().find(g => g.id == id)
    if (gestorEncontrado) {
      return gestorEncontrado.nome
    } else {
      return 'N/A'
    }
  }

}