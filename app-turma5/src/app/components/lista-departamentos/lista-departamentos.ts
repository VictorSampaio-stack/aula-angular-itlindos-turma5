import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-departamentos',
  imports: [FormsModule],
  templateUrl: './lista-departamentos.html',
  styleUrl: './lista-departamentos.scss',
})
export class ListaDepartamentos {

  nomeCategoria: string = ''

  mudaNome(): void{
    this.nomeCategoria = 'teste'
  }

}