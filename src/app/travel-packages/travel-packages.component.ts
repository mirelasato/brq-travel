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
  destinoCardsHosp: Destino[];
  destinoCardsBateVolta: Destino[];
  isCollapsed = false;

  inscricao: Subscription;

  seeMore: boolean = false;
  viewBtn: boolean = false;

  constructor(private service: PacotesDestinoService) { }

  ngOnInit() {

    this.inscricao = this.service.lista()
    .subscribe(dados => {
      this.destinoCards = dados;
      this.destinoCardsHosp = this.destinoCards.filter(x => x.tipo === 1);
      // this.destinoCardsBateVolta = this.destinoCards.filter(x => x.tipo === 2);
      this.viewBtn2();
      // this.viewBtn3()

      console.log('Bate Volta',this.destinoCardsBateVolta)
    });
    
  }

  ngOnDestroy() {

    this.inscricao.unsubscribe();
  }

  setTypeTravel(typeTravel) {

    this.isCollapsed = true;
    this.destinoCardsDisplay = this.destinoCards.filter(x => x.tipo === typeTravel);
    this.ativarBotao();
    this.viewBtn3();
    
  } 

  // Efeito que deixa o botão ativado no filtro de pacotes de viagens  
  ativarBotao() {

    this.seeMore = false;
    let id = document.getElementById('button');
    let btns = id.getElementsByClassName('btn');
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function() {
        let current = document.getElementsByClassName(' active');
        current[1].className = current[1].className.replace(' active', '');
        this.className += ' active';
      })
      
    }
    
  }

  setSeeMoreHosp() {

    this.seeMore = !this.seeMore;

  }

  setSeeMoreBat() {

    this.seeMore = !this.seeMore;

  }

  viewBtn2() {
    
    if (this.destinoCardsHosp.length > 3) {
      this.viewBtn = !this.viewBtn;
      console.log('AAAA', this.destinoCardsHosp)
    }
  }

  viewBtn3() {
    
    if (this.destinoCardsDisplay.length > 3) {
      this.viewBtn = !this.viewBtn;
      console.log('BBBB', this.destinoCardsDisplay)
    }
  }

}

