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
    private activatedRoute: ActivatedRoute,) {
  }


  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.errorId = params.id;
    });

    this.getError();
  }

  public getError(): void {
    switch (this.errorId) {
      case '1':
        this.msgError = 'eita';
        this.title = 'erro';
        this.urlBackButton = 'error:pacotes';
        break;
      case '2':
        this.msgError = 'não é possivel carregar essa informação';
        this.title = 'erro';
        this.urlBackButton = 'visualizacao:id';
        break;
      case '3':
        this.msgError = 'Você não pode realizar essa ação';
        this.title = 'erro';
        this.urlBackButton = 'carrinho';
        break;
      default:
        this.msgError = 'não é possivel carregar essa informação';
        this.title = 'erro';
        this.urlBackButton = 'error:id';
        break;
    }
  }
}






