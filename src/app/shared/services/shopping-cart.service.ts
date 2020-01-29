import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Detalhes } from '../models/detalhes';
import { URL_API } from './app.api';
import { BehaviorSubject } from 'rxjs';


// import 'rxjs/add/operator/take';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {


  constructor(private http: HttpClient, ) { }

  private currentCartCount = new BehaviorSubject(0);
  currentMessage = this.currentCartCount.asObservable();
  private url_api = 'http://localhost:3000/destinos';
  public itemsCart: Detalhes[] = [];
  public pacotes: Detalhes[];
  id: any;

  updateCartCount(count: number) {
    this.currentCartCount.next(count);
  }

  addProductToCart(pacote: Detalhes) {
    this.itemsCart.push(pacote);
    console.log('pacote', this.itemsCart);
    localStorage.setItem('pacotes', JSON.stringify(this.itemsCart));
  }

  getProductFromCart() {
    return localStorage.getItem('pacotes');
  }

  removeAllProductFromCart() {
    return localStorage.removeItem('pacotes');
  }

  // getById(id: any) {
  //   return this.http.get<Detalhes>(this.url_api + '/' + id);
  

  //   this.pacotes = [
  //     {
  //       quantity: 1,
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

  // }
}

  // addToCart(pacotes: Detalhes) {
    
  // }
  



  // cardId = localStorage.getItem('cardId');

  

  // private create() {
  //   return this.db.list('/carrinho-de-compras').push({
  //     dateCreated: new Date().getTime()
  //   });
  // }

  // private getCart(cartId: string) {
  //   return this.db.object('/carrinho-de-compras/' + cartId);
  // }

  // private async getOrCreateCart() {
  //   const cardId = localStorage.getItem('cartId');
  //   // tslint:disable-next-line:curly
  //   if (cardId)  return cardId;
  //   let result = await this.create();
  //     // tslint:disable-next-line: no-shadowed-variable
  //   localStorage.setItem('cardId', result.key);
  //   return result.key;
  // }
      // tslint:disable-next-line:curly


  //  async addToCart(pacotes: Detalhes) {
  //   const cardId = await this.getOrCreateCart();
  //   let item$ = this.http.get('/carrinho-de-compras/' + cardId + '/items/' + pacotes.id);
  //   item$.take(1).subscribe(item => {
  //     // tslint:disable-next-line:curly
  //     if (item.$exists()) item$.update({ quantity: item.quantity + 1 });
  //     else.item$.set({ pacotes: pacotes, quantity: 1 });
  //   });


    // })
    // // tslint:disable-next-line: align
    // return this.http.get<Destino[]>(this.API)
    //   .pipe(
    //     tap(console.log)
    //   );
  