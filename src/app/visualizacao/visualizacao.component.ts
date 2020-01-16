import { Component, OnInit } from '@angular/core';
import { Detalhes } from '../shared/models/detalhes.model';
import { ShoppingCartService } from '../shopping-cart.service';
import { Destino } from '../shared/models/destino';


@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.css']
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


console.log('this.pacotes' , this.pacotes[0]);


  }
  getDetalhes() {

    this.pacotes = [
      {
        id: 1,
        titulo: 'Caldas Novas',
        anunciante: 'BRQ-Travel',
        valor: 300,
        destaque: false,
        data: '14/01/2020',
        feriado: '',
        descricao: 'a viagem contempla café da manhã e jantar no hotel, não é permitido animais. Crianças menores de 16 anos, devem estar devidamente acompanhadas por pessoas maiores de idade.',
        tipo: 'Bate Volta',
        vagas: 30,
        imagens: [
            {
              url: '../assets/img/capa-destinos.jpg',
            },
            {
              url: '../assets/img/capa-destinos.jpg',
            },
            {
              url: '../assets/img/capa-destinos.jpg',
            },
        ]
      },
    ];

  this.imagens = this.pacotes[0].imagens;


}
}
