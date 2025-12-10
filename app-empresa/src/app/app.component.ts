import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListaFuncionarios } from './components/lista-funcionarios/lista-funcionarios';
import { FormFuncionarios } from './components/form-funcionarios/form-funcionarios';
import { ListaDepartamentos } from './components/lista-departamentos/lista-departamentos';
import { FormDepartamentos } from './components/form-departamentos/form-departamentos';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterModule,
        ListaFuncionarios,
        FormFuncionarios,
        ListaDepartamentos,
        FormDepartamentos,
    ],
    template: `
    <nav style="display: flex; justify-content: center; gap: 15px; padding: 15px; background-color: #1E90FF; border-bottom: 2px solid #104E8B; flex-wrap: wrap;">
      <a routerLink="/" style="padding: 10px 20px; background-color: #ffffff; color: #1E90FF; border-radius: 8px; font-weight: bold; text-decoration: none;">Home</a>
      <a routerLink="/funcionarios" style="padding: 10px 20px; background-color: #ffffff; color: #1E90FF; border-radius: 8px; font-weight: bold; text-decoration: none;">Funcionários</a>
      <a routerLink="/form-funcionario" style="padding: 10px 20px; background-color: #ffffff; color: #1E90FF; border-radius: 8px; font-weight: bold; text-decoration: none;">Novo Funcionário</a>
      <a routerLink="/departamentos" style="padding: 10px 20px; background-color: #ffffff; color: #1E90FF; border-radius: 8px; font-weight: bold; text-decoration: none;">Departamentos</a>
      <a routerLink="/form-departamento" style="padding: 10px 20px; background-color: #ffffff; color: #1E90FF; border-radius: 8px; font-weight: bold; text-decoration: none;">Novo Departamento</a>
    </nav>
    <div style="padding: 30px;">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent { }