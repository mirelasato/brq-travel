import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../shared/services/auth-service';
import { ApiService } from '../../shared/services/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class UserLoginComponent implements OnInit {

  FormLogin: FormGroup;

  constructor(private fb: FormBuilder,
              public authService: AuthService,
              public API: ApiService) { }

  ngOnInit(): void {
    this.newFormLogin();
    this.authService.status.valid = true;

  }
  doLogin(email, senha) {
    this.authService.SignIn(email, senha);
    this.API.getUser(email).subscribe(data =>
      this.API.AddToLocalStorage(data));
  }

  newFormLogin() {
    this.FormLogin = this.fb.group({
      email: [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
        ])
      ],
    },
    );
  }

  get email() {
    return this.FormLogin.get('email');
  }
  get password() {
    return this.FormLogin.get('password');
  }

}
