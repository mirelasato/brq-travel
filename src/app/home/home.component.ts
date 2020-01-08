import { Component, OnInit } from '@angular/core';
import { PacotesDestinoService } from '../shared/services/pacotes-destino.service';
import { Destino } from '../shared/models/destino';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  destaqueCards: Destino[];
  destaqueCardsDisplay: Destino[];
  
  constructor(private service: PacotesDestinoService) { }

  ngOnInit() {
    this.service.lista()
    .subscribe(dados => this.destaqueCards = dados);

    this.destaqueCardsDisplay = this.destaqueCards.filter(x => x.destaque === true)
    console.log('destaqueCards', this.destaqueCardsDisplay)
  }

}
