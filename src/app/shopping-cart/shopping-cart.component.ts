import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { AuthService } from '../shared/services/auth-service';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../shared/models/item.model';
import { Product } from '../shared/models/product.model';
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
    this.CartTotal = JSON.parse(localStorage.getItem('cart'));
    this.total = this.shoppingCartService.calcTotal();
    this.cartEmpty();
  }


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
        let cart = JSON.parse(localStorage.getItem('cart'));
        for (let i = 0; i < cart.length; i++) {
          const item = cart[i];
          if (item.product.id === id) {
            cart.splice(i, 1);
            break;
          }
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        // this.loadCart();
        console.log('item excluído com sucesso');
        this.cartEmpty();
        swal.fire('Excluído com sucesso', 'O registro já era', 'success')
        // return c.removeItem()
      }
    });
  }
    // Função de carrinho vazinho para ser mostrada independente do status página.
    cartEmpty() {
      let cart = JSON.parse(localStorage.getItem('cart'));
      if (cart.length === 0) {
        this.isEmpty = true;
      } else {
        this.CartTotal = JSON.parse(localStorage.getItem('cart'));
        this.total = this.shoppingCartService.calcTotal();
      }
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
}

export class CollapseDemoanimatedComponent {
  isCollapsed = true;
}

