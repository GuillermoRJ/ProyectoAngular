import { Component } from '@angular/core';
import { Personal } from '../../models/personal';
import { doctoresService } from '../../empleados.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  imports: [],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})
export class ActualizarComponent {
  empleados: Personal[] = [];
  constructor(private servicio: doctoresService, private router: Router) {}

  ngOnInit() {
    this.empleados = this.servicio.getAll();
  }

  irAEditar(id: number) {
    this.router.navigate(['/editar', id]);
  }
}
