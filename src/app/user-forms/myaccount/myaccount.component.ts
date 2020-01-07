import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth-service';
import { User } from '../../shared/models/usuario';
import { Validacoes } from '../../shared/helpers/validacoesHelper';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})

export class MyaccountComponent implements OnInit {
  MyAccountForm: FormGroup;
  emailUser = this.authService.GetEmail;
  data: Array<User>;
  CurrentUser;
  id;

  constructor(private fb: FormBuilder,
              public authService: AuthService,
              public API: ApiService) { }

  ngOnInit() {
    this.newMyAccountForm();

    this.API.getUser().subscribe((data) => {
      this.CurrentUser = data;
      this.id = data[0].id;
      console.log(this.CurrentUser);
    });

  }

  salvarDados() {
    const FormData = this.MyAccountForm.value;

    const user = new User(
      FormData.nome === '' ?  this.CurrentUser[0].nome : FormData.name,
      this.CurrentUser[0].email,
      FormData.cpf === '' ? this.CurrentUser[0].cpf : FormData.cpf,
      FormData.rg === '' ? this.CurrentUser[0].rg : FormData.rg,
      FormData.phone === '' ? this.CurrentUser[0].phone : FormData.phone
    );
    this.API.updateUser(this.id, user).subscribe(() => {
      console.log('Sucesso');
    });
  }

  newMyAccountForm() {
    this.MyAccountForm = this.fb.group({
      name: [
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
      phone: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]{5,11}' )
        ])
      ],
    }
    );
  }

  get name() {
    return this.MyAccountForm.get('name');
  }
  get email() {
    return this.MyAccountForm.get('email');
  }
  get cpf() {
    return this.MyAccountForm.get('cpf');
  }
  get rg() {
    return this.MyAccountForm.get('rg');
  }
  get phone() {
    return this.MyAccountForm.get('phone');
  }
}

