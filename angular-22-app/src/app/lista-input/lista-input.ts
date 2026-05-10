import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-input',
  imports: [FormsModule],
  templateUrl: './lista-input.html',
  styleUrl: './lista-input.css',
})
export class ListaInput {
  list = ["Zelda", "Shrek"];
  nombre = "";


  agregar(nombre: string){
    if(this.nombre.length != 0){
      this.list.push(nombre);
    }
  }
}
