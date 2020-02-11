import { Component, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter'
import { RegistertravelService } from 'src/app/shared/services/registertravel.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registertravel',
  templateUrl: './registertravel.component.html',
  styleUrls: ['./registertravel.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    { provide: DateAdapter, useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS}
  ]
})

export class RegistertravelComponent implements OnInit {
  FormRegister: FormGroup;
  status = {
    isDanger: true,
    valid: true };
  MsgError = '';

  constructor( private formBuilder: FormBuilder,
               private service: RegistertravelService,
               private _adapter: DateAdapter<any>) { }

  OnSubmit() {
    this.status.valid = true;
    if (this.FormRegister.valid) {
      const formData = this.FormRegister.value;
      this.service.create(formData).subscribe(
        data => { this.status.isDanger = false;
                  this.status.valid = false;
                  this.MsgError = 'Novo pacote registrado com sucesso!'; },
        err => { this.status.isDanger = true;
                 this.status.valid = false;
                 console.log('falha:' + err);
                 this.MsgError = 'Falha:' + err;
                });
    } else {
      this.status.isDanger = true;
      this.status.valid = false;
      this.MsgError = 'Por favor, verifique os campos do seu formulário';
    }
  }

  ngOnInit(): void {
    this.newRegisterForm();
    this.ChangeLanguage();
    this.status.valid = true;
  }

  ChangeLanguage() {
    this._adapter.setLocale('pt');
  }

  newRegisterForm() {
    this.FormRegister = this.formBuilder.group({
      titulo: [
        '',
        Validators.compose([Validators.required])
      ],
      data: [
        '',
        Validators.compose([Validators.required])
      ],
      retorno: [
        '',
        Validators.compose([Validators.required])
      ],
      embarque: [
        '',
        Validators.compose([Validators.required])
      ],
      valor: [
        '',
        Validators.compose([Validators.required])
      ],
      vagas: [
        '',
        Validators.compose([Validators.required])
      ],
      tipo: [
        '',
        Validators.compose([Validators.required])
      ],
      descricaocard: [
        '',
        Validators.compose([Validators.required])
      ],
      descricao: [
        '',
        Validators.compose([Validators.required])
      ],
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
