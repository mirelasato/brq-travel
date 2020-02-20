import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Detalhes } from '../models/detalhes';
import { URL_API } from './app.api';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Item } from '../models/item.model';


// import 'rxjs/add/operator/take';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  public product: Product[] = [];
  private items: Item[] = [];
  public total = new BehaviorSubject<number>(0);

  private currentCartCount = new BehaviorSubject(0);
  currentMessage = this.currentCartCount.asObservable();
  private itemsCart: Product[] = [];
  public pacotes: Detalhes[];
  id: any;

  constructor( ) {
    // this.product =  this.product = [
    //   { id: 'oferta1', name: 'Arraial do Cabo',  price: 500,  image: "assets/travel-packages/arraial-do-cabo/image1.jpg" },
    //   { id: 'oferta2', name: 'Campos do Jordão', price: 160,  image: "assets/travel-packages/campos-do-jordao/image1.jpg" },
    //   { id: 'oferta3', name: 'Foz do Iguaçu',    price: 690,  image: "assets/travel-packages/foz/image1.jpg" },
    //   { id: 'oferta4', name: 'São Roque',        price: 200,  image: "assets/travel-packages/sao-roque/image1.jpg" },
    //   { id: 'oferta5', name: 'Capitólio',        price: 200,  image: "assets/travel-packages/capitolio/image1.jpg" },
    //   { id: 'oferta6', name: 'Ilhabela',         price: 120,  image: "assets/travel-packages/ilhabela/image1.jpg" },
    //   { id: 'oferta7', name: 'Monte Verde',      price: 120,  image: "assets/travel-packages/monte-verde/image1.jpg" },
    //   { id: 'oferta8', name: 'TESTE 8',          price: 120,  image: "assets/travel-packages/monte-verde/image3.jpg" },
    //   { id: 'oferta9', name: 'TESTE 9',          price: 200,  image: "assets/travel-packages/monte-verde/image3.jpg" },

    // ];
  }

  
  getTotal$() {
    return this.total.asObservable();
  }

  calcTotal() {
    let sum = 0;
    this.items.forEach(item => {
      sum += item.quantity;
    });
    return sum;
  }

  addItem(item: any) {
    this.items.push(item);
    this.total.next(this.calcTotal());
    //save to localStore
  }

  findAll(): Product[] {
    return this.product;
  }

  find(id: string): Product {
    return this.product[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: string) {
    for (let i = 0; i < this.product.length; i++) {
      if (this.product[i].id == id) {
        return i;
      }
    }
    return -1;
  }




 
  addProductToCart(product: Product) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    
    this.itemsCart.push(product);
    console.log('service', this.itemsCart);
    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify(this.itemsCart));
  }


  getProductFromCart() {
    if (localStorage.getItem('product') === null) {
      this.product = [];
    } else {
      this.product = JSON.parse(localStorage.getItem('product'));
    }
    return localStorage.getItem('product')

  }

  removeItem() {
    return localStorage.removeItem('product');
  }

  //   removeItem(Product){
  //     this.product.splice(this.product.indexOf(Product), 1)
  //     //salva na sessão
  //     sessionStorage.setItem("cart",JSON.stringify(this.product));
  // }

  // recalculateCart() {






  //   $ ('.product').each(function () {
  //     this.total + = parseFloat ($ (this).children('.quantity').text());
  //   });
  // }




  totalIns(): number {
    return this.product
      .map(item => item.price)
      .reduce((prev, value) => prev + value, 0);
  }

  installment(): number {
    return Math.max.apply(
      Math, this.product
        .map(function (prod) {
          return prod.price;
        })
    )

  }

}
