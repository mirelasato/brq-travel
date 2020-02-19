import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { AuthService } from '../shared/services/auth-service';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';
import { Destino } from '../shared/models/destino';
import { ActivatedRoute } from '@angular/router';
import { Detalhes } from '../shared/models/detalhes';
import { Item } from '../shared/models/item.model';
import { Product } from '../shared/models/product.model';
import { default as NProgress } from 'nprogress';
import swal from 'sweetalert2';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  providers: [ShoppingCartService]
})
export class ShoppingCartComponent implements OnInit {

  quantity: number;
  defaultQuantity = 1;
  productAddedToCart: any;
  totalItens = 0;
  produtos: string;
  allTotal: number;
  isEmpty: boolean;
  public oferta: Detalhes;
  id: string;
  imagens: any[];
  public items: Item[] = [];
  public total: number;
  public product: Product;
  total$: Observable<number>

  // public pacotes: Destino;


  constructor(
    public shoppingCartService: ShoppingCartService,
    public API: ApiService,
    public authService: AuthService,
    private activatedRoute: ActivatedRoute,

  ) {
    this.total$ = shoppingCartService.total;
  }

  ngOnInit() {

    // const cartSession = sessionStorage.getItem('cart');
    // carrinho não está vazio
    // if (cartSession != null) {
    //   this.shoppingCartService.product = JSON.parse(cartSession);

    this.productAddedToCart = this.shoppingCartService.getProductFromCart();
    const newArray = JSON.parse(this.productAddedToCart);

    this.produtos = newArray;

    for (let i in newArray) {
      this.totalItens = newArray.length;
    }

    this.shoppingCartService.removeItem();
    this.shoppingCartService.addProductToCart(this.product);
    //  this.calculateAllTotal(this.productAddedToCart);

    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      if (id) {
        const item: Item = {
          product: this.shoppingCartService.find(id),
          quantity: 1,
        };
        if (localStorage.getItem('cart') == null) {
          const cart: any[] = [];
          cart.push(JSON.stringify(cart));
          debugger;
        } else {
          const cart: any[] = [];
          if (localStorage.getItem('cart')) {
            const cart: any[] = JSON.parse(localStorage.getItem('cart'));
          }
          let index = -1;
          // tslint:disable-next-line: prefer-for-of
          for (let i = 0; i < cart.length; i++) {
            const item: Item = JSON.parse(cart[i]);
            if (item.product.id === id) {
              index = i;
              break;
            }
          }
          if (index === -1) {
            cart.push(JSON.stringify(item));
            localStorage.setItem('cart', JSON.stringify('cart'));

          } else {
            const item: Item = JSON.parse(cart[index]);
            item.quantity += 1;
            cart[index] = JSON.stringify(item);
            localStorage.setItem('cart', JSON.stringify(cart));
          }
        }
        this.loadCart();
      } else {
        this.loadCart();
      }
    });
  }

  addItem() {
    this.shoppingCartService.addItem({ quantity: 1 });
  }

  // tslint:disable-next-line:no-unused-expression
  //   product():  Product[] {
  //   return this.shoppingCartService.product;
  // }

  loadCart(): void {
    this.total = 0;
    this.items = [];
    const cart: any[] = [];
    JSON.parse(localStorage.getItem('cart'));

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < cart.length; i++) {
      const item: Item = JSON.parse('cart');
      this.items.push({
        product: item.product,
        quantity: item.quantity
        
      });
      console.log('quantity')
      this.totalItens = item.product.price * item.quantity;
      console.log('total é');
      debugger;
    }
  }

  // item(): Product[] {
  //   return this.shoppingCartService.product;
  // }

  remove(id: string): void {
    let c = this.shoppingCartService
    swal.fire({
      title: 'Confirmação',
      text: "Você tem certeza que deseja remover este item do carrinho?",

      showCancelButton: true,
      confirmButtonColor: '#449d44',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim'
    }).then(function () {
      NProgress.start()
      swal.fire(
        'Excluído!',
        'Item excluído do carrinho.',
        'success'
      )
      NProgress.done()
      return c.removeItem()

    })
    const cart: any[] = [];
    JSON.parse(localStorage.getItem('cart'));
    const index = 1;
    for (let i = 0; i < cart.length; i++) {
      const item = JSON.parse(cart[i]);
      if (item.product.id === id) {
        cart.splice(i, 1);
        break;

      }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    this.loadCart();
    console.log('item excluído com sucesso');
    this.isEmpty = true;
  }

 
  totalIns(): number {
    return this.shoppingCartService.totalIns();
  }

  installments() {
    return this.shoppingCartService.installment();
  }

  incrementar() {
    this.defaultQuantity++;
  }

  decrementar() {
    this.defaultQuantity--;
  }


  /*for (let i in newArray) {
    this.totalItens = newArray.length;
  }*/
  // // this.shoppingCartService.removeAllProductFromCart();
  // // this.shoppingCartService.addProductToCart(this.oferta);
  // // this.calculateAllTotal(this.productAddedToCart);






  //     get GetUser(): string {
  //   const name = JSON.parse(localStorage.getItem('user'));
  //   name.email = name.email.substring(0, ((name.email).indexOf('@')));
  //   return (name.email);

  // }






}


export class CollapseDemoanimatedComponent {
  isCollapsed = true;
}

