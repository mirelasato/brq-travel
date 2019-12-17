import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.css']
})
export class VisualizacaoComponent implements OnInit {

  titulo: string;

  constructor() { }

  ngOnInit() {
    this.titulo = 'Caldas Novas';
  }

}
