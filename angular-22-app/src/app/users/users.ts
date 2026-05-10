import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  users = [
    {
      id : 1,
      name : "Carlos",
      edad: 12,
      ciudad: "Madrid"
    },
    {
      id : 1,
      name : "Carlos2",
      edad: 22,
      ciudad: "Barcelona"
    },
    {
      id : 1,
      name : "Carlos el tercero",
      edad: 32,
      ciudad: "Bañaderos"
    },
  ]
}
