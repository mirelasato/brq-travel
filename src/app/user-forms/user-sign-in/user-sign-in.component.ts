import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../../../node_modules/@angular/forms';
import { UsuarioLogin } from '../usuario';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {

  FormularioLogin: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit():void {
    this.criarFormularioLogin();
  }

  FazerLogin(){
    const dadosLogin = this.FormularioLogin.value;

    const login = new UsuarioLogin(
      dadosLogin.email,
      dadosLogin.senha
    )
  }

  criarFormularioLogin() {
    this.FormularioLogin = this.fb.group({
      email: [
        '',
        Validators.compose([
          Validators.required
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

  get email(){
    return this.FormularioLogin.get('email');
  }
  get senha(){
    return this.FormularioLogin.get('senha');
  }

}
