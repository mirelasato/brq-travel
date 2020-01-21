import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { AuthService } from '../shared/services/auth-service';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';
import { Destino } from '../shared/models/destino';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  id: number;
  imagens: any[];
  destaqueCards: Destino[];
  destaqueCardsDisplay: Destino[];
  // public pacotes: Destino;


  constructor(public ShoppingCartService: ShoppingCartService, public API: ApiService, public authService: AuthService) { }

  ngOnInit() {

    // this.getDetalhes();

    // console.log('this.pacotes', this.pacotes[0]);
  }

  // getDetalhes() {

  //   this.pacotes = [
  //     {
  //       id: 1,
  //       titulo: 'Caldas Novas',
  //       anunciante: 'BRQ-Travel',
  //       valor: 300,
  //       destaque: false,
  //       data: '14/01/2020',
  //       feriado: '',
  //       descricao: 'a viagem contempla café da manhã e jantar no hotel, não é permitido animais. Crianças menores de 16 anos, devem estar devidamente acompanhadas por pessoas maiores de idade.',
  //       tipo: 'Bate Volta',
  //       vagas: 30,
  //       imagens: [
  //           {
  //             url: '../assets/img/capa-destinos.jpg',
  //           },
  //           {
  //             url: '../assets/img/capa-destinos.jpg',
  //           },
  //           {
  //             url: '../assets/img/capa-destinos.jpg',
  //           },
  //       ]
  //     },
  //   ];

  //     }

      get GetUser(): string {
    const name = JSON.parse(localStorage.getItem('user'));
    name.email = name.email.substring(0, ((name.email).indexOf('@')));
    return (name.email);

  }
  

  }

  







export class CollapseDemoanimatedComponent {
  isCollapsed = true;
}

