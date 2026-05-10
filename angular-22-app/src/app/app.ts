import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from "./user/user";
import { Games } from './games/games';
import { Users } from "./users/users";
import { Cambio } from "./cambio/cambio";
import { Contador } from "./contador/contador";
import { Generar } from "./generar/generar";
import { Entradas } from "./entradas/entradas";
import { Lista } from "./lista/lista";
import { ListaInput } from "./lista-input/lista-input";
import { ListaModificable } from "./lista-modificable/lista-modificable";
import { Estados } from "./estados/estados";
import { Formulario } from "./formulario/formulario";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cambio, Contador, Generar, Entradas, Lista, ListaInput, ListaModificable, Estados, Formulario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  city = "Lamine Yamal jajajaj";
}
