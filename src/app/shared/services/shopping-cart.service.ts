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

  private itemsCart: Item[] = [];
  public pacotes: Detalhes[];
  id: any;

  constructor() {
  }



  // Método para calcular o total dos itens do carrinho
  calcTotal() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let total = 0;
    cart.forEach(Item => total += Item.product.valor * Item.quantity);

    return total;

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



  // Método que adiciona itens no carrinho.
  addProductToCart(product: Item) {
    this.itemsCart = [];
    const cart: Array<Item> = JSON.parse(localStorage.getItem('cart'));
    if (cart !== null) {
      cart.forEach(element => {
        this.itemsCart.push(element);
      });
    }
    this.itemsCart.push(product);
    // console.log('AUMENTOU QUANTIDADE DE ITEM NOVO NO CARRINHO', this.itemsCart);

    
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

  Quantity(product: Product) {
    this.itemsCart = [];
    const cart: Array<Item> = JSON.parse(localStorage.getItem('cart'));
    const index = cart.findIndex(prod => prod.product.id === product.id);
    cart[index].quantity--;
    cart.forEach(element => {
      this.itemsCart.push(element);
    });
    // console.log('ADICIONOU MAIS UM ITEM NO CARRINHO', this.itemsCart);
    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify(this.itemsCart));
  }

  // Método para ler produto do carrinho
  getProductFromCart() {
    // let localStorageItem = JSON.parse(localStorage.getItem('product'));
    // return localStorageItem == null ? [] : localStorageItem.product;
    if (localStorage.getItem('product') === null) {
      this.product = [];
    } else {
      this.product = JSON.parse(localStorage.getItem('product'));
    }
    return localStorage.getItem('product');

  }
  

  // Método que remove item do carrinho
  removeItem(Product) {
    this.itemsCart = [];
    const cart: Array<Item> = JSON.parse(localStorage.getItem("cart"));
    this.product.splice(this.product.indexOf(Product), 1);
    localStorage.setItem("cart", JSON.stringify(this.product));
  }



}



