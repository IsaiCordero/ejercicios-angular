import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  imports: [],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista {
  list = ["Zelda", "Until then", "Elden ring", "Holiwi"];
  indice = 0;

  next(){
    if (this.indice < this.list.length - 1){
      this.indice++;
    } else{
      this.indice = 0;
    }
  }
}
