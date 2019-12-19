import { Component, OnInit } from '@angular/core';
import { Detalhes } from '../shared/models/detalhes.model';


@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.css']
})
export class VisualizacaoComponent implements OnInit {

  pacotes: Detalhes[];
  imagens: any[];
  // public pacotes: Detalhes;
  constructor() { }

  ngOnInit() {
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
