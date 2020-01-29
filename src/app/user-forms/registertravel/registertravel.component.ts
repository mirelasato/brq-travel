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
      titulo: '',
      data: '',
      retorno: '',
      embarque: '',
      valor: '',
      vagas: '',
      tipo: '',
      descricaocard: '',
      descricao: '',
    });
  }

  get titulo() {
    return this.FormRegister.get('titulo');
  }
  get data() {
    return this.FormRegister.get('data');
  }
  get retorno() {
    return this.FormRegister.get('retorno');
  }
  get embarque() {
    return this.FormRegister.get('embarque');
  }
  get valor() {
    return this.FormRegister.get('valor');
  }
  get vagas() {
    return this.FormRegister.get('vagas');
  }
  get tipo() {
    return this.FormRegister.get('tipo');
  }
  get descricaocard() {
    return this.FormRegister.get('descricaocard');
  }
  get descricao() {
    return this.FormRegister.get('descricao');
  }
}
