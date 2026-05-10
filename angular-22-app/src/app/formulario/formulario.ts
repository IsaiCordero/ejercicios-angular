import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  nombre = "";
  correo = "";
  edad = "";
  
  datos: { nombre : string, correo : string, edad : string }[] = [];
  
  save(name: any, email: any, year: any){
    this.datos.push({
      nombre: name,
      correo: email,
      edad: year
    });
  }
  delete(index: number){
    this.datos.splice(index,1);

    this.nombre = "";
    this.correo = "";
    this.edad = "";
  }
}
