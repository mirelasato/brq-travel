import { Component, OnInit } from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import { APP_DATE_FORMATS, AppDateAdapter } from 'src/app/shared/services/format-datepicker';


@Component({
  selector: 'app-registertravel',
  templateUrl: './registertravel.component.html',
  styleUrls: ['./registertravel.component.css'],
  providers: [
    {provide: DateAdapter, useClass: AppDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS}
  ]
})
export class RegistertravelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
