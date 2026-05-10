import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css',
})
export class Hijo {
  @Input() Lista: string[] | undefined;
  @Output() eventoEliminar = new EventEmitter<number>();

  eliminarUsuario(indice: number){
    this.eventoEliminar.emit(indice);
  }
}
