import { Component, OnInit, OnDestroy } from '@angular/core';
import { PacotesDestinoService } from '../shared/services/pacotes-destino.service';
import { Destino } from '../shared/models/destino';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-travel-packages',
  templateUrl: './travel-packages.component.html',
  styleUrls: ['./travel-packages.component.css']
})
export class TravelPackagesComponent implements OnInit, OnDestroy {

  destinoCards: Destino[];
  destinoCardsDisplay: Destino[];
  isCollapsed = false;

  inscricao: Subscription;

  constructor(private service: PacotesDestinoService) { }

  ngOnInit() {
    this.inscricao = this.service.lista()
    .subscribe(dados => this.destinoCards = dados);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  setTypeTravel(typeTravel){
    
    this.isCollapsed = true;
    this.destinoCardsDisplay = this.destinoCards.filter(x => x.tipo === typeTravel )
  }

}

