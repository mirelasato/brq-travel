import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  formForgotPasswd: FormGroup;
  constructor(private fb: FormBuilder, public authService: AuthService) { }

  ngOnInit() {
    this.newformForgotPasswd();
  }

  newformForgotPasswd() {
    this.formForgotPasswd = this.fb.group({
      email: [
        '',
        Validators.compose([
          Validators.required
        ])
      ]
    });
  }

  get email() {
    return this.formForgotPasswd.get('email');
  }
}
