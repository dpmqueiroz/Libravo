import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redirecionaLogin(){
    window.location.href = "http://localhost:4200/login"
  }
}
