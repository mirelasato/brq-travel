import { Component, OnInit } from '@angular/core';
import { View} from '../shared/models/view.model';

@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.css']
})
export class VisualizacaoComponent implements OnInit {
 view = View;
  titulo: string;
  valor: string;

  constructor() { }

  ngOnInit() {
    this.titulo = 'Caldas Novas';
    this.valor = '150,00';


  }

}
