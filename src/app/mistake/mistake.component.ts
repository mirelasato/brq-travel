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
    private activatedRoute: ActivatedRoute) {
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
        this.msgError = 'não foi possivel carregar essa informação';
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
        default:
          this.msgError = 'não é possivel carregar essa informação';
          this.title = 'erro';
          this.titleLink = 'tentar novamente?';
          this.urlBackButton = 'error:id';
          break;
    }
  }
  tentarNovamente() {
     this.router.navigate([this.urlBackButton]);
  }
}






