import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Padre } from './padre/padre';
import { Guitarra } from "./guitarra/guitarra";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Padre, Guitarra],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-nivel-medio');
}
