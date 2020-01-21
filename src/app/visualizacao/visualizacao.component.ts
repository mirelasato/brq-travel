import { Component, OnInit } from '@angular/core';
import { Destino } from '../shared/models/destino';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service';
import { Detalhes } from '../shared/models/detalhes';


@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.css'],
  
})
export class VisualizacaoComponent implements OnInit {

  pacotes: Detalhes[];
  imagens: any[];
  destaqueCards: Destino[];
  destaqueCardsDisplay: Destino[];
  // public pacotes: Detalhes;
  constructor(private service: ShoppingCartService) { }

  ngOnInit() {
    this.service.addToCart()
    .subscribe(dados => {this.pacotes = dados;
      // tslint:disable-next-line:align
      this.pacotes = this.pacotes.filter(x => x.destaque === true
    )});

    this.getDetalhes  ();
  }
  getDetalhes() {
   return this.pacotes

  }
}
