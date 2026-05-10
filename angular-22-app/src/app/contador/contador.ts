import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.html',
  styleUrl: './contador.css',
})
export class Contador {
  count = 0;
  suma(){
    this.count++;
  }
  resta(){
    if (this.count != 0){
      this.count--;
    }
  }
  reset(){
    this.count = 0;
  }
}
