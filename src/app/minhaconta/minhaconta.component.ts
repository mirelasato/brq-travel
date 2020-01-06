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
  CurrentUser: any;
  constructor(private fb: FormBuilder,
              public authService: AuthService,
              public API: ApiService) { }

  ngOnInit() {
    this.criarFormularioDeUsuario();
    // this.getUserList();

    this.API.getUser().subscribe((data) => {
      this.CurrentUser = data;
      this.CurrentUser = this.CurrentUser.filter(d => d.email === this.emailUser);
      console.log(this.CurrentUser);

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

