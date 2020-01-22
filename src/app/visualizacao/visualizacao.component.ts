import { Component, OnInit } from '@angular/core';
import { Destino } from '../shared/models/destino';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service';
import { Detalhes } from '../shared/models/detalhes.js';
import { VisualizacaoService } from '../shared/services/visualizacao.service';
import { TabDirective } from 'ngx-bootstrap';


@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.css'],
  providers: [VisualizacaoService]
})
export class VisualizacaoComponent implements OnInit {

  public oferta: Detalhes;

  imagens: any[];
  destaqueCards: Destino[];
  destaqueCardsDisplay: Destino[];
  // public pacotes: Detalhes;
  // VisualizacaoService: any;
  value: string;
  onSelect(data: TabDirective): void {
    this.value = data.heading;
  }
  constructor(private service: ShoppingCartService,
    private route: ActivatedRoute,
    private visualizacaoService: VisualizacaoService) { }

  ngOnInit() {
    // this.service.addToCart()
    // .subscribe(dados => {this.pacotes = dados;
    //   // tslint:disable-next-line:align
    //   this.pacotes = this.pacotes.filter(x => x.destaque === true
    // )});
console.log(this.route.snapshot.params['id']);
     this.visualizacaoService.getDetalhesPorId(this.route.snapshot.params['id'])
     .then(( oferta: Detalhes) => {
       this.oferta = oferta;

 }
     )
   }

}

