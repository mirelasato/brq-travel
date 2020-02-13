import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mistake',
  templateUrl: './mistake.component.html',
  styleUrls: ['./mistake.component.css']
})
export class MistakeComponent implements OnInit {

  errorId: string;
  msgError: string;
  urlBackButton: string;
  title: string;
  titleLink: string;

  constructor( 
    private router: Router,
    private activatedRoute: ActivatedRoute)
     {
      this.router.navigate(['.home']);

      this.activatedRoute.params.subscribe(params => {
        this.errorId = params.id;
      });
      
      this.getError();

        this.router.navigate([this.urlBackButton]);
      


     }


  ngOnInit() {}

   
   public  getError(): void {
     switch (this.errorId){
      case '1':
        this.msgError = 'não é possivel carregar essa informação';
        this.title = 'erro';
        this.titleLink = 'tentar novamente?';
        this.urlBackButton = 'home/visualizacao';
        break;
        case '2':
        this.msgError = 'não é possivel carregar essa informação';
        this.title = 'erro';
        this.titleLink = 'tentar novamente?';
        this.urlBackButton = 'home';
        break;
      }
     }
}



  


