import { Component, OnInit } from '@angular/core';
// import { Pacote} from '../shared/models/pacotes.model';
import { Pacote } from '../shared/models/pacotes.model';


@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.css']
})
export class VisualizacaoComponent implements OnInit {
 
  titulo: string;
  valor: string;
  url: string;

  pacotes: Pacote[];

  constructor() { }

  ngOnInit() {
    this.getPacotes();


    this.titulo = 'Caldas Novas';
    this.valor = '150,00';
    this.url = '/assets/img/capa-destino.jpg';

console.log('this.pacotes' , this.pacotes);


  }
  getPacotes() {

    this.pacotes = [
      {
      id: 1,
      titulo: 'Caldas Novas',
      anunciante: '',
      valor: 300,
      destaque: false,
      descricao: '',
      categoria: '',
      imagens: [
          {
            url:'assets/img/capa-destinos.jpg',
          },
      ]
    },
    {
      id: 2,
      titulo: 'Ilha Bela',
      anunciante: '',
      valor: 300,
      destaque: false,
      descricao: '',
      categoria: '',
      imagens: [
        {
          id: 1,
          name: 'rodrigo2',
          url: 'assets/img/capa-destinos.jpg',
        },
        {
          id: 2,
          name: 'kamila2',
          url: 'assets/img/capa-destinos.jpg'
        },
        {
          id: 3,
          name: 'vinicios2',
          url: 'assets/img/capa-destinos.jpg'
        },
      ]
    },
  ];

  }

}
