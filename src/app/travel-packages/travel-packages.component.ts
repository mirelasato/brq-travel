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
  // seeMore2: boolean = false;
  viewBtn: boolean = false;
  viewBtn2: boolean = false;

  hideBtn: boolean = true;

  constructor(private service: PacotesDestinoService) { }

  ngOnInit() {

    this.inscricao = this.service.lista()
    .subscribe(dados => {
      this.destinoCards = dados;
      this.destinoCardsHosp = this.destinoCards.filter(x => x.tipo === 1);
      this.destinoCardsBateVolta = this.destinoCards.filter(x => x.tipo === 2);
      this.viewBtnHosp();
      this.viewBtnBV();

      

      console.log('Bate Volta',this.destinoCardsBateVolta)
    });
    
  }

  ngOnDestroy() {

    // this.inscricao.unsubscribe();
  }

  setTypeTravelHosp() {

    this.hideBtn = true
    this.isCollapsed = false;
    this.ativarBotao();
    this.destinoCardsHosp = this.destinoCards.filter(x => x.tipo === 1);
    console.log('eita', this.destinoCardsHosp)
    console.log('BtnHosp', this.viewBtn)
  }

  setTypeTravelBV() {

    this.hideBtn = true
    this.isCollapsed = true;
    this.ativarBotao();
    this.destinoCardsBateVolta = this.destinoCards.filter(x => x.tipo === 2);
    // this.viewBtnBV();
    

    // setTimeout(() => { 
    //   if (this.destinoCardsBateVolta.length > 3) {
    //     alert('teste')
    //     this.viewBtn2 = !this.viewBtn2;

        console.log('BBBB', this.destinoCardsBateVolta)
        console.log('BtnBV', this.viewBtn2)
        
    //   }
    // }, 3000)

    // if (this.destinoCardsBateVolta.length > 3) {
    //   alert('teste')
    //   this.viewBtn2 = !this.viewBtn2;
    //   console.log('BBBB', this.destinoCardsBateVolta)
    //   console.log('Btn', this.viewBtn2)
    // }
    // this.viewBtnBV();
    // this.viewBtn3();
    console.log('eitaBV', this.destinoCardsBateVolta)
    
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
    this.hideBtn = !this.hideBtn;

  }

  setSeeMoreBat() {

    this.seeMore = !this.seeMore;
    this.hideBtn = !this.hideBtn;
    

  }

  viewBtnHosp() {
    
    if (this.destinoCardsHosp.length > 3) {
      this.viewBtn = !this.viewBtn;
      console.log('AAAA', this.destinoCardsHosp)
    }
  }

  viewBtnBV() {
    
    if (this.destinoCardsBateVolta.length > 3) {
      this.viewBtn2 = !this.viewBtn2;
      console.log('BBBB', this.destinoCardsBateVolta)
    }
  }

}

