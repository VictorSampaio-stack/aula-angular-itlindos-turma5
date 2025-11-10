import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartamentoService } from '../../services/departamento-service';
import { TipoDepartamento } from '../../models/tipo-departamento';

@Component({
  selector: 'app-lista-departamentos',
  imports: [FormsModule],
  templateUrl: './lista-departamentos.html',
  styleUrl: './lista-departamentos.scss',
})
export class ListaDepartamentos {

   nomeCategoria: string = '';

  constructor( private apiDpto: DepartamentoService ){}

  criarDepartamento(): void{

    let objParaEnviar: TipoDepartamento = {
      departamento: this.nomeCategoria
    }
    this.apiDpto.postCriarDepartamento(objParaEnviar).subscribe({
      next: itemCriado => {
        console.log(itemCriado)
        alert('Departamento criado')
      },
      error: error => {
        console.log(error)
      }
    })
  }

}