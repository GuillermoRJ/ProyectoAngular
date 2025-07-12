import { Component } from '@angular/core';
import { Personal } from '../../models/personal';
import { ActivatedRoute } from '@angular/router';
import { doctoresService } from '../../empleados.service';

@Component({
  selector: 'app-consulta',
  imports: [],
  templateUrl: './consulta.component.html',
  styleUrl: './consulta.component.css',
})
export class ConsultaComponent {
  id!: number;
  empleado!: Personal | null;

  constructor(
    private route: ActivatedRoute,
    private servicio: doctoresService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.empleado = this.servicio.getById(this.id);
    });
  }
}
