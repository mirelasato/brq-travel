import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-travel',
  templateUrl: './card-travel.component.html',
  styleUrls: ['./card-travel.component.css']
})
export class CardTravelComponent implements OnInit {

  @Input() destino: any;

  constructor() { }

  ngOnInit() {

  }

}
