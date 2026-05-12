import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guitarra',
  imports: [FormsModule],
  templateUrl: './guitarra.html',
  styleUrl: './guitarra.css',
})
export class Guitarra {
  Lista = [
    {id: 1, tipo: "A", valor: "La", imagen: "La.jpeg"},
    {id: 2, tipo: "B", valor: "Si", imagen: "Si.jpeg"},
    {id: 3, tipo: "C", valor: "Do", imagen: "Do.jpeg"},
    {id: 4, tipo: "D", valor: "Re", imagen: "Re.jpeg"},
    {id: 5, tipo: "E", valor: "Mi", imagen: "Mi.jpeg"},
    {id: 6, tipo: "F", valor: "Fa", imagen: "Fa.jpeg"},
    {id: 7, tipo: "G", valor: "Sol", imagen: "Sol.jpeg"},
    {id: 8, tipo: "F", valor: "Fa", imagen: "Fa2.jpeg"},
    {id: 9, tipo: "E", valor: "Mi", imagen: "Mi2.jpeg"},
  ]
  elementoActual = this.Lista[0];

  entrada: string = '';

  cambiarElemento(){
    if (this.entrada === this.elementoActual.valor) {
      const posicionAleatoria = Math.floor(Math.random() * this.Lista.length);
      this.elementoActual = this.Lista[posicionAleatoria];
      this.entrada = '';
    }
  }

}
