
import { Injectable } from '@angular/core';
import doctores from '../data/doctores.json';
import { Personal } from './models/personal';

@Injectable({
  providedIn: 'root'
})
export class doctoresService {
  doctores: Personal[] = doctores;

  constructor() {}

  ngOnInit(): void {}

  getAll(): Personal[] {
    const recuperaDatos: Personal[] = JSON.parse(
      localStorage.getItem('doctores') ?? '[]'
    );

    if (recuperaDatos.length === 0) {
      this.doctores = doctores;
    } else {
      this.doctores = recuperaDatos;
    }
    return this.doctores;
  }

  getById(idEmp: number): Personal | null {
    const encontrado = this.doctores.find((emp) => emp.id === idEmp);

    return encontrado || null;
  }

  delete(idEmp: number): void {
    const index = this.doctores.findIndex((emp) => emp.id === idEmp);
    if (index !== -1) {
      this.doctores.splice(index, 1);

      localStorage.setItem('doctores', JSON.stringify(this.doctores));
    }
  }

  create(objeto: Personal): void {
    this.doctores.push(objeto);

    localStorage.setItem('doctores', JSON.stringify(this.doctores));
  }

  update(objeto: Personal): void {
    const index = this.doctores.findIndex((emp) => emp.id === objeto.id);
    if (index !== -1) {
      this.doctores[index] = objeto;

      localStorage.setItem('doctores', JSON.stringify(this.doctores));
    }
  }
}
