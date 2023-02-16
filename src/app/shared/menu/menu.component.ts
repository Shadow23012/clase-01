import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [{
      label: 'Inicio',
  },
  {
      label: 'Productos', icon: 'pi pi-briefcase',
      items: [
          {label: 'Tecnologia', icon: 'pi pi-fw pi-desktop'},
          {label: 'Ropa', icon: 'pi pi-fw pi-star'}
      ]
  },
  {
    label: 'Perfil', icon: 'pi pi-user',
    items: [
        {label: 'iniciar sesion', icon: 'pi pi-fw pi-user-plus'}
    ]
},
{
  label: 'Carrito de compras', icon: 'pi pi-shopping-cart'}
  ]
};
  }


