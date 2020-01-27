import { Component, OnInit } from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import { APP_DATE_FORMATS, AppDateAdapter } from 'src/app/shared/services/format-datepicker';
import { HttpClient } from '@angular/common/http';
import { RegistertravelService } from 'src/app/shared/services/registertravel.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  FormRegister: FormGroup;

  constructor( private formBuilder: FormBuilder,
               private service: RegistertravelService) { }

  OnSubmit() {
    const formData = this.FormRegister.value;
    console.log(formData);
    this.service.create(formData).subscribe(seila => console.log('sucesso'));
  }

  ngOnInit(): void {
    this.newRegisterForm();
  }

  newRegisterForm() {
    this.FormRegister = this.formBuilder.group({
      name: '',
      dategoing: '',
      datereturn: '',
      placegoing: '',
      value: '',
      amount: '',
      minidescription: '',
      completedescription: '',
    });
  }

  get name() {
    return this.FormRegister.get('name');
  }
  get dategoing() {
    return this.FormRegister.get('dategoing');
  }
  get datereturn() {
    return this.FormRegister.get('datereturn');
  }
  get placegoing() {
    return this.FormRegister.get('placegoing');
  }
  get value() {
    return this.FormRegister.get('value');
  }
  get amount() {
    return this.FormRegister.get('amount');
  }
  get minidescription() {
    return this.FormRegister.get('minidescription');
  }
  get completedescription() {
    return this.FormRegister.get('completedescription');
  }
}
