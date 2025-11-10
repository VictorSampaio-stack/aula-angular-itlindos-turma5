import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { TipoGestor } from '../../models/tipo-gestor';
import { GestorService } from '../../services/gestor-service';
import { DepartamentoService } from '../../services/departamento-service';
import { TipoDepartamento } from '../../models/tipo-departamento';

@Component({
  selector: 'app-lista-gestores',
  imports: [],
  templateUrl: './lista-gestor.html',
  styleUrl: './lista-gestor.scss',
})
export class ListaGestor implements OnInit {

  gestores: WritableSignal<TipoGestor[]> = signal([])
  dptos: WritableSignal<TipoDepartamento[]> = signal([])


  constructor(
    private apiGestor: GestorService,
    private apiDpto: DepartamentoService
  ) { }

  ngOnInit(): void {
    this.carregaDepartamentos()
    this.carregaGestores()
  }

  carregaGestores(): void {
    this.apiGestor.getGestores().subscribe({
      next: respGestores => {
        this.gestores.set(respGestores)
      }, error: error => {
        console.log(error)
      }
    })
  }

  carregaDepartamentos(): void {
    this.apiDpto.getDepartamentos().subscribe({
      next: respDpto => {
        this.dptos.set(respDpto)
      }, error: error => {
        console.log(error)
      }
    })
  }

  buscaDpto(id: string): string {
    let dptoEncontrado = this.dptos().find(d => d.id === id)
    if (dptoEncontrado) {
      return dptoEncontrado.departamento
    } else {
      return 'N/A'
    }
  }

}
