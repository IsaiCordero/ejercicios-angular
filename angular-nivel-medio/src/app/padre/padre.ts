import { Component } from '@angular/core';
import { Hijo } from '../hijo/hijo';

@Component({
  selector: 'app-padre',
  imports: [Hijo],
  templateUrl: './padre.html',
  styleUrl: './padre.css',
})
export class Padre {
  textoPadre = "Hola a todos soy Ibai Llanos"
  Lista = [
    {id: 1, nombre: "Carlos", edad: 2},
    {id: 2, nombre: "Ibai LLanos", edad: 20},
    {id: 3, nombre: "Messi", edad: 19},
  ];
  indice: number | undefined;

  eliminar($event: number){
    this.Lista.splice($event, 1);
  }

  Tareas = [
    {id: 1, tarea: "ver Shrek 2", completada: false},
    {id: 2, tarea: "volver a ver Shrek 2 pero en ingles", completada: false}
  ];

  changeState(tarea: { id: number; tarea: string; completada: boolean }){
    tarea.completada = !tarea.completada;
  }
}
