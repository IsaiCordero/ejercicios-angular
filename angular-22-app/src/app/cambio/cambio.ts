import { Component } from '@angular/core';

@Component({
  selector: 'app-cambio',
  imports: [],
  templateUrl: './cambio.html',
  styleUrl: './cambio.css',
})
export class Cambio {
  pulsado = false;

  iniciado(){
    this.pulsado = true;
  }
  cerrado(){
    this.pulsado = false;
  }
}
