import { Destino } from './../shared/models/destino';
import { Product } from './../shared/models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { VisualizacaoService } from '../shared/services/visualizacao.service';
import { TabDirective } from 'ngx-bootstrap';
import { Detalhes } from '../shared/models/detalhes';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { observable } from 'rxjs';



@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.css'],
  providers: [VisualizacaoService, ShoppingCartService]
})

export class VisualizacaoComponent implements OnInit {
  private product: Product[];
  FormRegister: FormGroup;
  public oferta: Detalhes;
  VisualizacaoService: any;
  value: string;
  productAddedToCart: any;
  isloading: boolean;

  onSelect(data: TabDirective): void {
    this.value = data.heading;
  }

  add() {
    // Quando clicar no botão "adicionar ao carrinho" será tirada uma vaga
    this.oferta.vagas -= 1;
    alert(' Item adicionado com sucesso ao carrinho ');
  }

  constructor(
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute,
    private visualizacaoService: VisualizacaoService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.isloading = true;
    console.log('ngOnInit...', this.isloading);
    this.product = this.shoppingCartService.findAll();

    this.visualizacaoService.getProduto(this.route.snapshot.params['id'])
      .subscribe((oferta: Detalhes) => {
        this.oferta = oferta;
        this.isloading = !this.isloading;
      });

    this.visualizacaoService.getProduto(this.route.snapshot.params['id'])
      .subscribe((oferta: Detalhes) => {
        this.oferta = oferta;

        // Carregamento da página
        this.isloading = !this.isloading;
      },

      // seta a rota de erro
      error => {
        this.router.navigate(['error:id']);
      });
  }
  // Função que adiciona produto ao carrinho
  addProductToCart(product: Product) {
    this.shoppingCartService.addProductToCart(product);
  }
}
