import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  @Input() Lista: { id: number; nombre: string; edad: number }[] = [];
  @Output() eventoEliminar = new EventEmitter<number>();

  eliminarUsuario(indice: number){
    this.eventoEliminar.emit(indice);
  }

  @Input() Texto: string | undefined;
  @Input() Tareas: {id: number; tarea: string; completada: boolean}[] = [];
  @Output() eventoCambiar = new EventEmitter<{id: number; tarea: string; completada: boolean}>();
  completarTarea(tarea: {id: number; tarea: string; completada: boolean}){
    this.eventoCambiar.emit(tarea);
  }
}
