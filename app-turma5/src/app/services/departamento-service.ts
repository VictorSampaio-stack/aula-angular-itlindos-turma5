import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipoDepartamento } from '../models/tipo-departamento';

@Injectable({
  providedIn: 'root',
})
export class DepartamentoService {

  private api = inject(HttpClient)
  private readonly url: string = 'http://localhost:3000/departamento/'

  getDepartamentos(): Observable<TipoDepartamento[]> {
    return this.api.get<TipoDepartamento[]>(this.url)
  }

  getDepartamentoPorId(id: string): Observable<TipoDepartamento> {
    return this.api.get<TipoDepartamento>(this.url + id)
  }

}