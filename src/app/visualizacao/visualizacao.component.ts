import { Component, OnInit } from '@angular/core';
import { Destino } from '../shared/models/destino';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from '../shopping-cart.service';
import { VisualizacaoService } from '../shared/services/visualizacao.service';
import { TabDirective } from 'ngx-bootstrap';
import { Detalhes } from '../shared/models/detalhes';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';


@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.css'],
  providers: [VisualizacaoService]
})
export class VisualizacaoComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages:NgxGalleryImage [];


  public oferta: Detalhes;

  imagens: Destino[];
  destaqueCards: Destino[];
  destaqueCardsDisplay: Destino[];
   public pacotes: Detalhes;
   VisualizacaoService: any;
  value: string;
  onSelect(data: TabDirective): void {
    this.value = data.heading;
  }
  constructor(private service: ShoppingCartService,
    private route: ActivatedRoute,
    private visualizacaoService: VisualizacaoService) { }

  ngOnInit(): void {
    //  this.service.addToCart()
    //  .subscribe(dados => {this.pacotes = dados;
    //     //tslint:disable-next-line:align
    //    this.pacotes = this.pacotes.filter(x => x.destaque === true
    //  )});

//tratamento da service
console.log(this.route.snapshot.params['id']);
     this.visualizacaoService.getDetalhesPorId(this.route.snapshot.params['id'])
     .then(( oferta: Detalhes) => {
       this.oferta = oferta;

 }
     )
     //carrosel


this.galleryOptions = [
    {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
    },
    // max-width 800
    {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
    },
    // max-width 400
    {
        breakpoint: 400,
        preview: false
    }
];


this.galleryImages = [
    {
        small: 'assets/pacotes/banner1.jpg',
        medium: 'assets/pacotes/banner1.jpg',
        big: 'assets/pacotes/banner1.jpg'
     },
     {
         small: 'assets/pacotes/banner1.jpg',
          medium: 'assets/pacotes/banner1.jpg',
         big: 'assets/pacotes/banner1.jpg'
    },
     {
         small: 'assets/pacotes/banner1.jpg',
        medium: 'assets/pacotes/banner1.jpg',
         big: 'assets/pacotes/banner1.jpg'
    }
 ];

  }
}
  

