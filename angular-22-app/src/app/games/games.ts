import { Component } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
  templateUrl: './games.html',
  styleUrl: './games.css',
})
export class Games {
  games = [
    {
      id: 1,
      name: "Elden ring"
    },
    {
      id: 2,
      name: "Until then"
    },
    {
      id: 3,
      name: "Tears of the Kingdom"
    }
  ]
}
