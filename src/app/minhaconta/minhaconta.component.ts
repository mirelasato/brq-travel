import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth-service';
import { Usuario } from '../shared/models/usuario';
import { Validacoes } from '../shared/helpers/validacoesHelper';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-minhaconta',
  templateUrl: './minhaconta.component.html',
  styleUrls: ['./minhaconta.component.css']
})

export class MinhacontaComponent implements OnInit {
  formularioDeUsuario: FormGroup;
  emailUser = this.authService.GetEmail;
  data: Array<Usuario>;
  CurrentUser;
  id;

  constructor(private fb: FormBuilder,
              public authService: AuthService,
              public API: ApiService) { }

  ngOnInit() {
    this.criarFormularioDeUsuario();

    this.API.getUser().subscribe((data) => {
      this.CurrentUser = data;
      this.id = data[0].id;
      console.log(this.CurrentUser);
    });

  }

  salvarDados() {
    const dadosFormulario = this.formularioDeUsuario.value;

    const usuario = new Usuario(
      dadosFormulario.nome === '' ?  this.CurrentUser[0].nome : dadosFormulario.nome,
      this.CurrentUser[0].email,
      dadosFormulario.cpf === '' ? this.CurrentUser[0].cpf : dadosFormulario.cpf,
      dadosFormulario.rg === '' ? this.CurrentUser[0].rg : dadosFormulario.rg,
      dadosFormulario.telefone === '' ? this.CurrentUser[0].telefone : dadosFormulario.telefone
    );
    this.API.updateUser(this.id, usuario).subscribe(() => { 
      console.log('Sucesso');
    });
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
        Validators.compose([
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'),
          Validators.required
        ])
      ],
      cpf: [
        '',
        Validators.compose([
          Validators.required,
          Validacoes.ValidaCpf,
          Validators.maxLength(11)])
      ],
      rg: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]{9}')
        ])
      ],
      telefone: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]{5,11}' )
        ])
      ],
    }
    );
  }

  get nome() {
    return this.formularioDeUsuario.get('nome');
  }
  get email() {
    return this.formularioDeUsuario.get('email');
  }
  get cpf() {
    return this.formularioDeUsuario.get('cpf');
  }
  get rg() {
    return this.formularioDeUsuario.get('rg');
  }
  get telefone() {
    return this.formularioDeUsuario.get('telefone');
  }
  get senha() {
    return this.formularioDeUsuario.get('senha');
  }
  get confirmarSenha() {
    return this.formularioDeUsuario.get('confirmarSenha');
  }
}

