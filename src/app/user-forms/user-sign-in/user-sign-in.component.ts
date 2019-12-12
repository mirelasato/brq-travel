import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../../../node_modules/@angular/forms';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {

  formularioLogin: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.criarFormularioLogin();
  }

  criarFormularioLogin() {
    this.formularioLogin = this.fb.group({
      nome: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(100)
        ])
      ],
      email: [
        '',
        Validators.compose([
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"),
          Validators.required
        ])
      ],
      cpf: [
        '',
        Validators.compose([
          Validators.required,
          Validators.maxLength(11)])
      ],
      rg:[
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern("[0-9]{9}")
        ])
      ],
      telefone:[
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern("[0-9]{5,11}")
        ])
      ],
      senha: [
        '',
        Validators.compose([
          Validators.required,
        ])
      ],
    },
    );
  }

}
