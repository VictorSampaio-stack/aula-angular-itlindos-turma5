import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoDepartamento } from '../models/tipo-departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
  private baseUrl = 'http://localhost:3000/departamentos';

  constructor(private http: HttpClient) {}

  listar(): Observable<TipoDepartamento[]> {
    return this.http.get<TipoDepartamento[]>(this.baseUrl);
  }
}
