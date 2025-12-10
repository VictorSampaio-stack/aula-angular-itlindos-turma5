import { Routes } from '@angular/router';

import { ListaFuncionarios } from './components/lista-funcionarios/lista-funcionarios';
import { FormFuncionarios } from './components/form-funcionarios/form-funcionarios';
import { ListaDepartamentos } from './components/lista-departamentos/lista-departamentos';
import { FormDepartamentos } from './components/form-departamentos/form-departamentos';

export const routes: Routes = [
    { path: '', component: ListaFuncionarios },
    // Funcionários
    { path: 'funcionarios', component: ListaFuncionarios },
    { path: 'form-funcionario', component: FormFuncionarios },
    { path: 'form-funcionario/:id', component: FormFuncionarios },

    // Departamentos
    { path: 'departamentos', component: ListaDepartamentos },
    { path: 'form-departamento', component: FormDepartamentos },
    { path: 'form-departamento/:id', component: FormDepartamentos },
];
