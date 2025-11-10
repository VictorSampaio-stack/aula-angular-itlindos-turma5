import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoGestor } from '../models/tipo-gestor';

@Injectable({
  providedIn: 'root',
})
export class GestorService {
  
  private api = inject(HttpClient)
  private readonly url: string = 'http://localhost:3000/gestor/'

  getGestores(): Observable<TipoGestor[]>{
    return this.api.get<TipoGestor[]>(this.url)
  }

  getGestorPorId(id: string): Observable<TipoGestor>{
    return this.api.get<TipoGestor>(this.url + id)
  }

}
