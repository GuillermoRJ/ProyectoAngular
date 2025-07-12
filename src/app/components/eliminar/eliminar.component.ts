import { Component } from '@angular/core';
import { doctoresService } from '../../empleados.service';
import { Personal } from '../../models/personal';

@Component({
  selector: 'app-eliminar',
  imports: [],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css',
})
export class EliminarComponent {
  empleados: Personal[] = [];

  mensajeEliminado = '';
  timeoutId: any;

  constructor(private servicio: doctoresService) {}

  ngOnInit() {
    this.cargarEmpleados();
  }

  cargarEmpleados() {
    this.empleados = this.servicio.getAll();
  }

  eliminarEmpleado(id: number) {
    this.servicio.delete(id);
    this.mensajeEliminado = `Empleado con ID ${id} eliminado.`;

    clearTimeout(this.timeoutId);

    this.timeoutId = setTimeout(() => {
      this.mensajeEliminado = '';
    }, 2000);

    this.cargarEmpleados();
  }
}
