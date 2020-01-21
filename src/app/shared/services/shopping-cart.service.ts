import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Destino } from '../models/destino';
import { AngularFireDatabase } from 'angularfire2/database';

import 'rxjs/add/operator/take';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient, private db: AngularFireDatabase) { }

  private readonly API = 'http://localhost:3000/destinos';
  cardId = localStorage.getItem('cardId');

  addToCart() {
    return this.http.get<Destino[]>(this.API);
  }

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
  }
