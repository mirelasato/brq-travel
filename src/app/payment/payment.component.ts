import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  FormPayment: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.newPaymentForm();
  }

  newPaymentForm() {
    this.FormPayment = this.fb.group({
      numbercard: [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
      expirationdata: [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
      securenumber: [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
      name: [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
      birthday: [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
      cpf: [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
      telephone: [
        '',
        Validators.compose([
          Validators.required
        ])
      ]
    }
    );
  }

  get numbercard() {
    return this.FormPayment.get('numbercard');
  }
  get expirationdata() {
    return this.FormPayment.get('expirationdata');
  }
  get securenumber() {
    return this.FormPayment.get('securenumber');
  }
  get name() {
    return this.FormPayment.get('name');
  }
  get birthday() {
    return this.FormPayment.get('birthday');
  }
  get cpf() {
    return this.FormPayment.get('cpf');
  }
  get telephone() {
    return this.FormPayment.get('telephone');
  }
}
