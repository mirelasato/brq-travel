import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PacotesDestinoService } from '../shared/services/pacotes-destino.service';
import { Destino } from '../shared/models/destino';
import { HomeBannerService } from '../shared/services/home-banner.service';
import { Banner } from '../shared/models/banner';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  destaqueCards: Destino[];
  destaqueCardsDisplay: Destino[];

  feriadoImg: Banner[];
  feriadoImgDisplay: Banner[];

  final: any;

  constructor(
    private service: PacotesDestinoService,
    private serviceBanner: HomeBannerService
    ) { }

  ngOnInit() {
    this.service.lista()
    .subscribe(dados => {this.destaqueCards = dados;
                         this.destaqueCardsDisplay = this.destaqueCards.filter(x => x.destaque === true)});


    this.serviceBanner.listaBanner()
    .subscribe(img => {this.feriadoImg = img;
                      //  this.feriadoImgDisplay = this.feriadoImg.filter(y => y.id === 1);

                      //  this.final = this.feriadoImgDisplay[0];
                       console.log('teste', this.feriadoImg);
                       this.final = this.feriadoImg[0];
                       console.log('AAAAA', this.final);
    // tslint:disable-next-line: semicolon
    })
  }
}
