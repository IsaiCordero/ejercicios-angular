import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-entradas',
  imports: [FormsModule],
  templateUrl: './entradas.html',
  styleUrl: './entradas.css',
})
export class Entradas {
  name = "";
  @Input() nombre!: string;

  cambioNombre(name: string){
    this.nombre = name;
  }
}
