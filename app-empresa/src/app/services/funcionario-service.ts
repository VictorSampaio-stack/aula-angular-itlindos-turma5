import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoFuncionario } from '../models/tipo-funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  private baseUrl = 'http://localhost:3000/funcionarios';

  constructor(private http: HttpClient) {}

  listar(): Observable<TipoFuncionario[]> {
    return this.http.get<TipoFuncionario[]>(this.baseUrl);
  }
}

