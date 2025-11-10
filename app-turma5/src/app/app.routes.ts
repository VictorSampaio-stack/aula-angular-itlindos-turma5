import { Routes } from '@angular/router';

import { ListaVagas } from './components/lista-vagas/lista-vagas';
import { FormVagas } from './components/form-vagas/form-vagas';
import { ListaGestor } from './components/lista-gestor/lista-gestor';

export const routes: Routes = [
    { path: '', component: ListaVagas },
    { path: 'form-vaga', component: FormVagas },
    { path: 'gestores', component: ListaGestor},
];
