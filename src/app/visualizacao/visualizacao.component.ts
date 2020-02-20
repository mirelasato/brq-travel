import { Destino } from './../shared/models/destino';
import { Product } from './../shared/models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../shared/models/item.model';
import { VisualizacaoService } from '../shared/services/visualizacao.service';
import { TabDirective } from 'ngx-bootstrap';
import { Detalhes } from '../shared/models/detalhes';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { observable } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.css'],
  providers: [VisualizacaoService, ShoppingCartService],
  animations: [
    trigger('buttonTextStateTrigger', [
      state('shown', style({
        opacity: 1
      })),
      state('transitioning', style({
        opacity: 0.3
      })),
      transition('shown => transitioning', animate('600ms ease-out')),
      transition('transitioning => shown', animate('600ms ease-in'))
    ])
  ]
})

export class VisualizacaoComponent implements OnInit {
  private product: Product[];
  FormRegister: FormGroup;
  public oferta: Detalhes;
  VisualizacaoService: any;
  value: string;
  productAddedToCart: any;
  isloading = true;
  buttonTextState = 'shown';
  buttonText = 'Adicionar ao Carrinho';
  transitionButtonText = 'Adicionar ao Carrinho';

  constructor(
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute,
    private visualizacaoService: VisualizacaoService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.loading();
    this.visualizacaoService.getProduto(this.route.snapshot.params['id'])
      .subscribe((oferta: Detalhes) => {
        this.oferta = oferta;
      },

      // seta a rota de erro
      error => {
        this.router.navigate(['error:id']);
      });
  }
  buttonTextTransitioned( ) {
    this.buttonText = this.transitionButtonText;
    this.buttonTextState = this.buttonTextState = 'shown';
  }

  onSelect(data: TabDirective): void {
    this.value = data.heading;
  }

  add() {
    // Quando clicar no botão "adicionar ao carrinho" será tirada uma vaga
    this.oferta.vagas -= 1;
  }

  // Função que adiciona produto ao carrinho
  addProductToCart(product: Product) {
    const cart: Array<Item> = JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
    if (cart === null) {
      const newItem: Item = new Item(product, 1);
      this.shoppingCartService.addProductToCart(newItem);
    } else {
      if (cart.find(item => item.product.id === product.id)) {
        this.shoppingCartService.ChangeQuantity(product);
      } else {
        const newItem: Item = new Item(product, 1);
        this.shoppingCartService.addProductToCart(newItem);
      }
    }

    this.buttonTextState = 'transitioning';
    this.transitionButtonText = 'Carregando';

    setTimeout(() => {
      this.buttonTextState = 'transitioning';
      this.transitionButtonText = 'Adicionando ao Carrinho';
    }, 1800);

    setTimeout(() => {
      this.buttonTextState = 'transitioning';
      this.transitionButtonText = 'Adicionado com Sucesso';
    }, 3600);
  }
  scrollTop() {
    setTimeout(() => {
    window.scrollTo(0, 0);
    }, 100);
  }

  loading() {
    setTimeout(() => {
    this.isloading = false;
    }, 1200);
  }
}
