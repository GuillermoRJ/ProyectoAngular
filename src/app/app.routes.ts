import { Routes } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { EliminarComponent } from './components/eliminar/eliminar.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { EditarComponent } from './components/editar/editar.component';

export const routes: Routes = [
  { path: 'listar', component: ListarComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: 'consulta/:id', component: ConsultaComponent },
  { path: 'eliminar', component: EliminarComponent },
  { path: 'actualizar', component: ActualizarComponent },
  { path: 'editar/:id', component: EditarComponent },

  { path: '', redirectTo: 'listar', pathMatch: 'full' },
  { path: '**', redirectTo: 'listar' }, //rutas inválidas
];
