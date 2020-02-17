import { Destino } from './../shared/models/destino';
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
  FormRegister: FormGroup;
  public oferta: Detalhes;
  VisualizacaoService: any;
  value: string;
  productAddedToCart: any;
  isloading = true;

  constructor(
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute,
    private visualizacaoService: VisualizacaoService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    // window.scrollTo(0, 0);
    // this.isloading = true;
    this.scrollTop();
    this.loading();
    this.visualizacaoService.getProduto(this.route.snapshot.params['id'])
      .subscribe((oferta: Detalhes) => {
        this.oferta = oferta;

        // Carregamento da página
        // this.isloading = !this.isloading;
      },

      // seta a rota de erro
      error => {
        this.router.navigate(['error:id']);
      });
  }

  onSelect(data: TabDirective): void {
    this.value = data.heading;
  }

  add() {
    // Quando clicar no botão "adicionar ao carrinho" será tirada uma vaga
    this.oferta.vagas -= 1;
    alert(' Item adicionado com sucesso ao carrinho ');
  }

  // Função que adiciona produto ao carrinho
  addProductToCart(oferta: Detalhes) {
    this.shoppingCartService.addProductToCart(oferta);
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
