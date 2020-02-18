import { Component, OnInit, OnDestroy } from '@angular/core';
import { PacotesDestinoService } from '../shared/services/pacotes-destino.service';
import { Destino } from '../shared/models/destino';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-travel-packages',
  templateUrl: './travel-packages.component.html',
  styleUrls: ['./travel-packages.component.css']
})
export class TravelPackagesComponent implements OnInit, OnDestroy {

  destinoCards: Destino[];
  destinoCardsHospedagem: Destino[];
  destinoCardsBateVolta: Destino[];

  isCollapsed = false;
  seeMore = false;
  viewBtnHosp = false;
  viewBtnBV = false;
  hideBtn = true;

  destinoQtHospedagem: number;
  destinoQtBateVolta: number;

  inscricao: Subscription;

  isloading = true;

  constructor(private service: PacotesDestinoService, private router: Router) { }

  ngOnInit() {

    this.scrollTop();
    this.loading();

    this.inscricao = this.service.lista()
      .subscribe(dados => {
        this.destinoCards = dados;
        this.destinoCardsHospedagem = this.destinoCards.filter(param => param.tipo === 1); // realiza o filtro pelo parametro tipo igual a 1
        this.destinoCardsBateVolta = this.destinoCards.filter(param => param.tipo === 2); // realiza o filtro pelo parametro tipo igual a 2
        this.viewBtnHospedagem();
        this.viewBtnBateVolta();
        this.destinoQtHospedagem = this.destinoCardsHospedagem.length - 4;
        this.destinoQtBateVolta = this.destinoCardsBateVolta.length - 4;
      },
      // seta a rota de erro
      error => {
        this.router.navigate(['error:id']);
      });

  }

  ngOnDestroy() {

    this.inscricao.unsubscribe();
  }

  // Exibe os cards "Pacotes com hospedagem"
  typeTravelHospedagem() {

    this.hideBtn = true;
    this.isCollapsed = false;
    this.ativarBotao();
  }

  // Exibe os cards "Pacotes com bate e volta"
  typeTravelBateVolta() {

    this.hideBtn = true;
    this.isCollapsed = true;
    this.ativarBotao();
  }

  // Efeito que deixa o botão ativado no filtro de pacotes de viagens sem perder o foco
  ativarBotao() {

    this.seeMore = false;

    let id = document.getElementById('button');
    let btns = id.getElementsByClassName('btn');
    for (let i = 0; i < btns.length; i++) {
      btns[i].addEventListener('click', function() {
        let current = document.getElementsByClassName(' active');
        current[1].className = current[1].className.replace(' active', '');
        this.className += ' active';
      });
    }
  }

  // Função que exibe a quantidade restante dos cards 
  // e oculta o botão que carrega o restante dos cards (Pacotes com hospedagem) 
  seeMoreHospedagem() {

    this.seeMore = !this.seeMore;
    this.hideBtn = !this.hideBtn;
  }

  // Função que exibe a quantidade restante dos cards 
  // e oculta o botão que carrega o restante dos cards (Pacotes de bate e volta) 
  seeMoreBateVolta() {

    this.seeMore = !this.seeMore;
    this.hideBtn = !this.hideBtn;
  }

  // Exibe o botão "Carregar mais cards".
  // Se a quantidade de cards maior que 3, então exibe o botão "Carregar mais cards"
  viewBtnHospedagem() {

    if (this.destinoCardsHospedagem.length > 4) {
      this.viewBtnHosp = !this.viewBtnHosp;
    }
  }

  // Exibe o botão "Carregar mais cards".
  // Se a quantidade de cards maior que 3, então exibe o botão "Carregar mais cards"
  viewBtnBateVolta() {

    if (this.destinoCardsBateVolta.length > 4) {
      this.viewBtnBV = !this.viewBtnBV;
    }
  }

  scrollTop() {
    setTimeout(() => {
    window.scrollTo(0, 0);
    }, 100);
  }

  loading() {
    setTimeout(() => {
    this.isloading = false;
    }, 1200);
  }

}

