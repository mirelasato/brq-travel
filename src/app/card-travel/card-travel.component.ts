import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/models/card.model';


@Component({
  selector: 'app-card-travel',
  templateUrl: './card-travel.component.html',
  styleUrls: ['./card-travel.component.css']
})
export class CardTravelComponent implements OnInit {
 card: Card[];
 imagens: any[];

  constructor() { }

  ngOnInit() {
    

    this.card = [
      {
          titulo: 'Caldas Novas',
          descricao: 'Uma breve descrição da viagem',
          data: '12/04/2020',
          valor: 300,
          imagens: [{
           url: 'assets/img/capa-destino',
          }
        ]
      }
    ]

  }

}
