import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  name: string = 'Mercedes'
  lastname: string = 'Marighetti'
  birthdate: Date = new Date (1991, 1, 15)
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
