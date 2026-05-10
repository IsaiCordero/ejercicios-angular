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
  Lista = ["CarlosFc02", "WIllyrex", "ibaiLLanos", "Oregano12"];
  indice: number | undefined;

  eliminar($event: number){
    this.Lista.splice($event, 1);
  }
}
