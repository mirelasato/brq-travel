import { Injectable } from '@angular/core';
import { Detalhes } from '../models/detalhes';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
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
  private itemsCart: Item[] = [];
  public pacotes: Detalhes[];
  id: any;

  constructor() {
    // let items = this.getProductFromCart();

    // if (items.length === 0) {
    //   this.id = 0;
    // } else {
    //   let maxId = items[items.length -1].quantity;
    //   this.id = maxId + 1;
    // }
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
    return 1;
  }




  updateCartCount(count: number) {
    this.currentCartCount.next(count);
  }


  addProductToCart(product: Item): void {

    localStorage.setItem('cart', JSON.stringify(this.itemsCart));
    this.id++;
    this.itemsCart = [];
    const cart: Array<Item> = JSON.parse(localStorage.getItem('cart'));
    if (cart !== null) {
      cart.forEach(element => {
        this.itemsCart.push(element);
      });
    }
    this.itemsCart.push(product);
    // console.log('AUMENTOU QUANTIDADE DE ITEM NOVO NO CARRINHO', this.itemsCart);

    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify(this.itemsCart));
  }

  ChangeQuantity(product: Product) {
    this.itemsCart = [];
    const cart: Array<Item> = JSON.parse(localStorage.getItem('cart'));
    const index = cart.findIndex(prod => prod.product.id === product.id);
    cart[index].quantity++;
    cart.forEach(element => {
      this.itemsCart.push(element);
    });
    // console.log('ADICIONOU MAIS UM ITEM NO CARRINHO', this.itemsCart);
    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify(this.itemsCart));
  }


  public getProductFromCart(): Item[] {
    let localStorageItem = JSON.parse(localStorage.getItem('product'));
    return localStorageItem == null ? [] : localStorageItem.product;
    //   if (localStorage.getItem('product') === null) {
    //     this.product = [];
    //   } else {
    //     this.product = JSON.parse(localStorage.getItem('product'));
    //   }
    //   return localStorage.getItem('product')

    // }
  }

  public removeItem(itemsCart: Item[]): void {
    let items = this.getProductFromCart();
    this.items = this.items.filter((items) => items.product != this.id);
    return localStorage.removeItem('product');
  }
  
  
  //   removeItem(Product){
  //     this.product.splice(this.product.indexOf(Product), 1)
  //     //salva na sessão
  //     sessionStorage.setItem("cart",JSON.stringify(this.product));
  // }

  // recalculateCart() {












}


