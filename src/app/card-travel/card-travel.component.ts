import { Component, OnInit } from '@angular/core';
import { DetailsCardTravel } from '../shared/models/DetailsCardTravel';

@Component({
  selector: 'app-card-travel',
  templateUrl: './card-travel.component.html',
  styleUrls: ['./card-travel.component.css']
})
export class CardTravelComponent implements OnInit {
  details: DetailsCardTravel[];

  constructor() { }

  ngOnInit() {
    this.getDetalhes();
  }
    getDetalhes() {

    this.details = [
    {
      titulo: 'Arraial do Cabo',
      descricao: 'Arraial do Cabo é um município brasileiro da Região dos Lagos, no estado do Rio de Janeiro. A cidade é costeira, e tem uma altitude média de apenas oito metros.',
      valor: 430,
      data: '31/05/2020',
    }
  ]
}
}