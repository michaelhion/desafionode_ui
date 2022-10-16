import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items!: MenuItem[];
    
  home!: MenuItem;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Listar clientes', routerLink:['list']},
      {label: 'Logout' , routerLink:['logout']},
      {label: 'Login' , routerLink:['login']}
  ];
  
  this.home = {icon: 'pi pi-home',routerLink:['/home']};
  }

}
