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
  CurrentUser: User;
  id;
  status = {
    isDanger: true,
    valid: true };
  MsgError = '';

  constructor(private fb: FormBuilder,
              public authService: AuthService,
              public API: ApiService) { }

  ngOnInit() {
    this.newMyAccountForm();

    // this.API.getUser(this.emailUser).subscribe((data) => {
    //   this.CurrentUser = data;

    this.CurrentUser = JSON.parse(localStorage.getItem('userLogged'));
    console.log(this.CurrentUser);
      // console.log(data.cpf);
    let cpf: string = this.CurrentUser[0].cpf;
    let rg: string = this.CurrentUser[0].rg;
    let tel: string = this.CurrentUser[0].phone;
    cpf = cpf.substr(0, 3) + '.' + cpf.substr(3, 3) + '.' + cpf.substr(6, 3) + '-' + cpf.substr(9, 2);
    rg = rg.substr(0, 2) + '.' + rg.substr(2, 3) + '.' + rg.substr(5, 3) + '-' + rg.substr(8, 1);
    tel = '(' + tel.substr(0, 2) + ') ' + tel.substr(2, 4) + '-' + tel.substr(6, 5);
    this.CurrentUser[0].phone = tel;
    this.CurrentUser[0].rg = rg;
    this.CurrentUser[0].cpf = cpf;

    // });

    this.authService.status.valid = true;

  }

  saveChanges() {
    this.status.valid = false;
    const form = this.MyAccountForm.controls;

    if ((!form.name.pristine && form.name.status === 'INVALID') ||
        (!form.cpf.pristine && form.cpf.status === 'INVALID') ||
        (!form.rg.pristine && form.rg.status === 'INVALID') ||
        (!form.phone.pristine && form.phone.status === 'INVALID')) {
      this.status.isDanger = true;
      this.status.valid = false;
      this.MsgError = 'Por favor, verifique todos os campos do formulário';
    } else {
      const user = new User(
        form.name.pristine ? this.CurrentUser[0].name : form.name.value,
        this.CurrentUser[0].email,
        form.cpf.pristine ? this.CurrentUser[0].cpf : form.cpf.value,
        form.rg.pristine ? this.CurrentUser[0].rg : form.rg.value,
        form.phone.pristine ? this.CurrentUser[0].phone : form.phone.value,
        false
      );
      this.API.updateUser(this.id, user).subscribe(
        res => {
          console.log(res);
          this.status.valid = false;
          this.status.isDanger = false;
          this.MsgError = 'Dados atualizados com sucesso!';
        },
        err => {
          console.log(err.message);
          this.status.isDanger = true;
          this.status.valid = false;
          this.MsgError = err.message;
      });
    }
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

