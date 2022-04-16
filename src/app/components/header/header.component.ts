import { Component, OnInit } from '@angular/core';
import { AboutComponent } from 'src/app/vista/about/about.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AboutComponent
  }

}
