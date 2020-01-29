import { Component, OnInit } from '@angular/core';
import { Destino } from '../shared/models/destino';
import { ActivatedRoute } from '@angular/router';

import { VisualizacaoService } from '../shared/services/visualizacao.service';
import { TabDirective } from 'ngx-bootstrap';
import { Detalhes } from '../shared/models/detalhes';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';


@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.css'],
  providers: [VisualizacaoService, ShoppingCartService]
})
export class VisualizacaoComponent implements OnInit {
  // galleryOptions: NgxGalleryOptions[];
  // galleryImages:NgxGalleryImage [];

  feriadoImg: Detalhes[];
  feriadoImgDisplay: Detalhes[];

  public oferta: Detalhes;

  final: any;

  imagens: Detalhes[];
  destaqueCards: Destino[];
  destaqueCardsDisplay: Destino[];
   public pacotes: Detalhes;
   VisualizacaoService: any;
  value: string;
  productAddedToCart: any;
  alerts: any[] = [];
  cartItemCount: any;

  onSelect(data: TabDirective): void {
    this.value = data.heading;

  }

  constructor(
    private shoppingCartService: ShoppingCartService,
    private route: ActivatedRoute,
    private visualizacaoService: VisualizacaoService) { }

  ngOnInit() {
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

// this.visualizacaoService.carrosel()
// .subscribe(img => {
// this.imagens = img;
//   this.final = this.imagens[0];
// });

  }


  
  // imagens: Destino[];
  // destaqueCards: Destino[];
  // destaqueCardsDisplay: Destino[];
  //  public pacotes: Detalhes;
  //  VisualizacaoService: any;
  // value: string;

  //shoppingCartService: any;


  addProductToCart(oferta: Detalhes) {
    this.shoppingCartService.addProductToCart(oferta);
    //this.productAddedToCart = this.shoppingCartService.getProductFromCart();
    /*if(this.productAddedToCart == null)
    {
      this.productAddedToCart = [];
      this.productAddedToCart.push(oferta);
      this.shoppingCartService.addProductToCart(this.productAddedToCart);
      this.alerts.push({
        id: 1,
        type: 'success',
        message: 'Produto adicionado ao carrinho.'
      });
      setTimeout(() => {
        this.closeAlert(this.alerts);
      }, 3000);
    }
    else
    {
      let tempProduct = this.productAddedToCart.find(p=>p.Id == oferta.id);
      if (tempProduct == null)
      {
        this.productAddedToCart.push(oferta);
        this.shoppingCartService.addProductToCart(this.productAddedToCart);
        this.alerts.push({
          id: 1,
          type: 'success',
          message: 'Produto adicionado ao carrinho.'
        });
        setTimeout(() => {
          this.closeAlert(this.alerts);
        }, 3000);
      }
      else
      {
        this.alerts.push({
          id: 2,
          type: 'warning',
          message: 'Produto já adicionado ao carrinho.'
        });
        setTimeout(() => {
          this.closeAlert(this.alerts);
        }, 3000);
      }
    }
      this.cartItemCount = this.productAddedToCart.length;
      this.shoppingCartService.updateCartCount(this.cartItemCount);
  }

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }*/



 }
     
     //carrosel


// this.galleryOptions = [
//     {
//         width: '600px',
//         height: '400px',
//         thumbnailsColumns: 4,
//         imageAnimation: NgxGalleryAnimation.Slide
//     },
//     // max-width 800
//     {
//         breakpoint: 800,
//         // width: '100%',
//         // height: '600px',
//         imagePercent: 80,
//         thumbnailsPercent: 20,
//         thumbnailsMargin: 20,
//         thumbnailMargin: 20
//     },
//     // max-width 400
//     {
//         breakpoint: 400,
//         preview: false
//     }
// ];


// this.galleryImages = [
//     {
//         small: 'assets/pacotes/banner1.jpg',
//         medium: 'assets/pacotes/banner1.jpg',
//         big: 'assets/pacotes/banner1.jpg'
//      },
//      {
//          small: 'assets/pacotes/banner1.jpg',
//           medium: 'assets/pacotes/banner1.jpg',
//          big: 'assets/pacotes/banner1.jpg'
//     },
//      {
//          small: 'assets/pacotes/banner1.jpg',
//         medium: 'assets/pacotes/banner1.jpg',
//          big: 'assets/pacotes/banner1.jpg'
//     }
//  ];


}
