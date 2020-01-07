import { Component, OnInit } from '@angular/core';
import { PacotesDestinoService } from '../shared/services/pacotes-destino.service';
import { Destino } from '../shared/models/destino';

@Component({
  selector: 'app-travel-packages',
  templateUrl: './travel-packages.component.html',
  styleUrls: ['./travel-packages.component.css']
})
export class TravelPackagesComponent implements OnInit {

  destinoCards: Destino[];
  destinoCardsDisplay: Destino[];
  isCollapsed = false;

  constructor(private service: PacotesDestinoService) { }

  ngOnInit() {
    this.service.lista()
    .subscribe(dados => this.destinoCards = dados);
  }

  setTypeTravel(typeTravel){
    
    this.isCollapsed = true;
    this.destinoCardsDisplay = this.destinoCards.filter(x => x.tipo === typeTravel )
    console.log('destinosFiltrados => ', this.destinoCardsDisplay)
  }

}

