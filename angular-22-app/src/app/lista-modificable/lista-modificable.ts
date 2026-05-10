import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-modificable',
  imports: [FormsModule],
  templateUrl: './lista-modificable.html',
  styleUrl: './lista-modificable.css',
})
export class ListaModificable {
  lista = ["Hola", "Yepa", "Silkson"];
  nombre = "";
  eliminar(id: number){
    this.lista.splice(id, 1);
  }
  agregar(nombre: string){
    if(nombre.length != 0){
      this.lista.push(nombre);
    }
  }
}
