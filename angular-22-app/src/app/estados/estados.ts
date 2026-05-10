import { Component } from '@angular/core';

@Component({
  selector: 'app-estados',
  imports: [],
  templateUrl: './estados.html',
  styleUrl: './estados.css',
})
export class Estados {
  Lista = [
    {
      id: 1,
      nombre: "Zelda",
      completado: true
    },
    {
      id: 2,
      nombre: "Until then",
      completado: false
    },
    {
      id: 3,
      nombre: "ELden ring",
      completado: true
    }
  ];
  changeState(item: { completado: boolean; }){
    item.completado = !item.completado;
  }
}
