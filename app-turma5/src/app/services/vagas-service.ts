import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PedidoVaga } from '../models/pedido-vaga';

@Injectable({
  providedIn: 'root',
})
export class VagasService {

  private http = inject(HttpClient)
  private readonly urlBase: string = 'http://localhost:3000/vagas/'

  getPedidosVagas(): Observable<PedidoVaga[]> {
    return this.http.get<PedidoVaga[]>(this.urlBase)
  }

  getPedidoVagaPorId(id: string): Observable<PedidoVaga> {
    return this.http.get<PedidoVaga>(this.urlBase + id)
  }
  postPedidoVagas(novoItem: PedidoVaga): Observable<PedidoVaga> {
    return this.http.post<PedidoVaga>(this.urlBase, novoItem, {
      headers: {
        "Content-type": "application/json"
      }
    })
  }
  putPedidoVagas(novoItem: PedidoVaga, idVaga: string): Observable<PedidoVaga> {
    return this.http.put<PedidoVaga>(this.urlBase + `/${idVaga}`, novoItem, {
      headers: {
        "Content-type": "application/json"
      }
    })
  }

}
