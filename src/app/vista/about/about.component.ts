import { Component, OnInit } from '@angular/core';
import { UserComponent } from 'src/app/class/user/user.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.sass']
})
export class AboutComponent implements OnInit {

  constructor() {
    user: UserComponent
   }

  ngOnInit(): void {
  }

}
