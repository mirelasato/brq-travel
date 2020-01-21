import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PacotesDestinoService } from '../shared/services/pacotes-destino.service';
import { Destino } from '../shared/models/destino';
import { HomeBannerService } from '../shared/services/home-banner.service';
import { Banner } from '../shared/models/banner';
import { Detalhes } from '../shared/models/detalhes';
import { HttpClient } from '@angular/common/http';
import { take, tap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  destaqueCards: Destino[];
  destaqueCardsDisplay: Destino[];

  detalhes: Detalhes;

  feriadoImg: Banner[];
  feriadoImgDisplay: Banner[];

  final: any;

  constructor(
    private service: PacotesDestinoService,
    private serviceBanner: HomeBannerService,
    private httpClient: HttpClient
  ) { }


  ngOnInit() {
    this.service.lista()
      .subscribe(dados => {
      this.destaqueCards = dados;

        this.destaqueCardsDisplay = this.destaqueCards.filter(x => x.destaque === true)
      });


    this.serviceBanner.listaBanner()
      .subscribe(img => {
      this.feriadoImg = img;
        this.final = this.feriadoImg[0];
      });
    }
}  