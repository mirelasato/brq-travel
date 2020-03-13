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

  // quantity: number;
  quantity = 1;
  // productAddedToCart: any;
  totalItens = 0;
  CartTotal: Array<Item>;
  // allTotal: number;
  isEmpty: boolean;
  // public oferta: Detalhes;
  id: string;
  // imagens: any[];
  public items: Item[] = [];
  public total: number;
  public product: Product;
  total$: Observable<number>;
  count: number = 0;
  isDisabled = true;

  // public pacotes: Destino;


  constructor(
    public shoppingCartService: ShoppingCartService,
    public API: ApiService,
    public authService: AuthService,
    private activatedRoute: ActivatedRoute,

  ){
    this.total$ = shoppingCartService.total;
  }

  flip() {
    this.isDisabled = !this.isDisabled;
  }

  ngOnInit() {


    // this.productAddedToCart = this.shoppingCartService.getProductFromCart();
    // const newArray = JSON.parse(this.productAddedToCart);

    // this.produtos = newArray;

    // for (let i in newArray) {
    //   this.totalItens = newArray.length;
    // }

    this.CartTotal = JSON.parse(localStorage.getItem('cart'));

    this.total = this.shoppingCartService.calcTotal();

    // this.shoppingCartService.removeItem();
    // this.shoppingCartService.addProductToCart(this.product);
    //  this.calculateAllTotal(this.productAddedToCart);
    // this.startCart();
  }

  // startCart() {
  //   this.activatedRoute.params.subscribe(params => {
  //     const id = params.id;
  //     if (id) {
  //       const item: Item = {
  //         product: this.shoppingCartService.find(id),
  //         quantity: 1,
  //       };
  //       if (localStorage.getItem('cart') == null) {
  //         const cart: any[] = [];
  //         cart.push(JSON.stringify(cart));
  //         debugger;
  //       } else {
  //         const cart: any[] = [];
  //         if (localStorage.getItem('cart')) {
  //           const cart: any[] = JSON.parse(localStorage.getItem('cart'));
  //         }
  //         let index = -1;
  //         // tslint:disable-next-line: prefer-for-of
  //         for (let i = 0; i < cart.length; i++) {
  //           const item: Item = JSON.parse(cart[i]);
  //           if (item.product.id === id) {
  //             index = i;
  //             break;
  //           }
  //         }
  //         if (index === -1) {
  //           cart.push(JSON.stringify(item));
  //           localStorage.setItem('cart', JSON.stringify('cart'));

  //         } else {
  //           const item: Item = JSON.parse(cart[index]);
  //           item.quantity += 1;
  //           cart[index] = JSON.stringify(item);
  //           localStorage.setItem('cart', JSON.stringify(cart));
  //         }
  //       }
  //       this.loadCart();
  //     } else {
  //       this.loadCart();
  //     }
  //   });
  // }

  // addItem() {
  //   this.shoppingCartService.addItem({ quantity: 1 });
  // }

  // tslint:disable-next-line:no-unused-expression
  //   product():  Product[] {
  //   return this.shoppingCartService.product;
  // }

  // método que carrega as informaões do carrinho em localstorage
  loadCart(): void {
    this.total = 0;
    this.items = [];
    const cart: any[] = [];
    JSON.parse(localStorage.getItem('cart'));

    for (let i = 0; i < cart.length; i++) {
      const item: Item = JSON.parse('cart');
      this.items.push({
        product: item.product,
        quantity: item.quantity

      });
      this.totalItens = item.product.price * item.quantity;

    }
  }

  remove(id: string): void {
    // let c = this.shoppingCartService
    swal.fire({
      title: 'Confirma a exclusão?',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Foi sem querer'
    }).then(result => {
      if (result.value) {
        //const cart: [] = [];
        let cart = JSON.parse(localStorage.getItem('cart'));
        //const index = 1;
        console.log('CARRINHO', cart);
        for (let i = 0; i < cart.length; i++) {
          const item = cart[i];
          console.log('ITEM: ', item.product.id);
          console.log('ID', id);
          if (item.product.id === id) {
            cart.splice(i, 1);
            console.log('CARRINHO_FINAL: ', cart);
            break;
          }
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        // this.loadCart();
        console.log('item excluído com sucesso');
        if (cart.length === 0) {
          this.isEmpty = true;
        } else {
          this.CartTotal = JSON.parse(localStorage.getItem('cart'));
          this.total = this.shoppingCartService.calcTotal();
        }

        swal.fire('Excluído com sucesso', 'O registro já era', 'success')
        // return c.removeItem()
      }

    });
    
  }

  // método para incrementar valores e quantidade dos produtos no carrinho
  incrementar(product: Product) {
    this.shoppingCartService.ChangeQuantity(product);
    this.ngOnInit();
  }

  // método para decrementar valores e quantidade dos produtos no carrinho
  decrementar(product: Product) {
    this.shoppingCartService.Quantity(product);
    this.ngOnInit();
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

