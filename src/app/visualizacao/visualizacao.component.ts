import { Destino } from './../shared/models/destino';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { VisualizacaoService } from '../shared/services/visualizacao.service';
import { TabDirective } from 'ngx-bootstrap';
import { Detalhes } from '../shared/models/detalhes';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
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

  onSelect(data: TabDirective): void {
    this.value = data.heading;

  }

  constructor(
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute,
    private visualizacaoService: VisualizacaoService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
  console.log('AAA', this.route.snapshot.params['id']);

  this.visualizacaoService.getProduto(this.route.snapshot.params['id'])
    .subscribe((oferta: Detalhes) => {
    this.oferta = oferta;
    });



  }
// Função que adiciona produto ao carrinho
addProductToCart(oferta: Detalhes) {
    this.shoppingCartService.addProductToCart(oferta);
 }
}
