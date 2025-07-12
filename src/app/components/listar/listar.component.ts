import { Component } from '@angular/core';
import { Personal } from '../../models/personal';
import { doctoresService } from '../../empleados.service';

@Component({
  selector: 'app-listar',
  imports: [],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {
  
  misEmpleados!:Personal[];

  constructor(private empleadosService:doctoresService){

  }

  ngOnInit(): void {
     this.misEmpleados=this.empleadosService.getAll();
     console.log(this.empleadosService);}
}
