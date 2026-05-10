import { Component } from '@angular/core';

@Component({
  selector: 'app-generar',
  imports: [],
  templateUrl: './generar.html',
  styleUrl: './generar.css',
})
export class Generar {
  texto = true;
  mas(){
    this.texto = false;
  }
  menos(){
    this.texto = true;
  }
}
