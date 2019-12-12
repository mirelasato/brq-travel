import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '../../../../node_modules/@angular/forms';
import { Validacoes } from '../helpers/validacoesHelper';
import {Usuario} from '../usuario';
@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

  formularioDeUsuario: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit():void {
    this.criarFormularioDeUsuario();
  }
  enviarDados() {
    const dadosFormulario = this.formularioDeUsuario.value;

    const usuario = new Usuario(
      dadosFormulario.nome,
      dadosFormulario.email,
      dadosFormulario.cpf,
      dadosFormulario.rg,
      dadosFormulario.telefone,
      dadosFormulario.senha,
      dadosFormulario.confirmarSenha
    );

    alert(`O usuário ${usuario.nome} foi cadastrado com sucesso. \n Dados: ${JSON.stringify(usuario)}`);

    this.formularioDeUsuario.reset();
  }

  criarFormularioDeUsuario() {
    this.formularioDeUsuario = this.fb.group({
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
        Validators.compose([Validators.email])
      ],
      cpf: [
        '',
        Validators.compose([Validators.required, Validacoes.ValidaCpf])
      ],
      rg:[
        '',
      ],
      telefone:[
        '',
      ],
      senha: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      ],
      confirmarSenha: ['', Validators.compose([Validators.required])]
    },
    {
      validator: Validacoes.SenhasCombinam
    }
    );
  }

  get nome(){
    return this.formularioDeUsuario.get('nome');
  }
  get email(){
    return this.formularioDeUsuario.get('email');
  }
  get cpf(){
    return this.formularioDeUsuario.get('cpf');
  }
  get rg(){
    return this.formularioDeUsuario.get('rg');
  }
  get telefone(){
    return this.formularioDeUsuario.get('telefone');
  }
  get senha(){
    return this.formularioDeUsuario.get('senha');
  }
  get confirmarSenha(){
    return this.formularioDeUsuario.get('confirmarSenha');
  }
}

