import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { AuthService } from '../shared/services/auth-service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {


  constructor(public API: ApiService, public authService: AuthService) { }

  ngOnInit() {

  }

  get GetUser(): string {
    const name = JSON.parse(localStorage.getItem('user'));
    name.email = name.email.substring(0, ((name.email).indexOf('@')));
    return (name.email);

  }

}

export class CollapseDemoanimatedComponent {
  isCollapsed = true;
}

