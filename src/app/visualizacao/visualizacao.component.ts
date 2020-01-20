import { Component, OnInit } from '@angular/core';
import { VisuaizacaoService } from '../shared/services/visualizacao.service';
import { Destino } from '../shared/models/destino';


@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.css'],
  providers: [VisuaizacaoService],
})
export class VisualizacaoComponent implements OnInit {

  public destinos: Destino[ ]

  constructor( private visuaizacaoService: VisuaizacaoService ) { }

  ngOnInit() {
    this.visuaizacaoService.getDestinos();
    // .then(( destinos: Destino[]) => {
    //   this.destinos = destinos
    // }) 
    // .catch (( param:any) => {})




  }
}
