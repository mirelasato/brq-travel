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
        anunciante: '',
        valor: 300,
        destaque: false,
        data: '',
        feriado: '',
        descricao: '',
        tipo: '',
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
