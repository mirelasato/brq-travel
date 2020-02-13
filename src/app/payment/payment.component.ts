import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Validacoes } from '../shared/helpers/validacoesHelper';
import { isValid } from 'cc-validate';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  FormPayment: FormGroup;
  creditcardurl = '';
  value;

  creditcard = document.getElementById('creditcard');
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.newPaymentForm();
    this.Listentochanges();
    this.getTotal();
  }

  getTotal() {
    this.value = JSON.parse(localStorage.getItem('pacotes'))[0].valor;
  }

  NewPayment() {
  }

  Listentochanges() {

    this.FormPayment.controls['cardnumber'].valueChanges.subscribe(value => {
      // console.log(value);
      let number = isValid(value);
      switch (number['cardType']){
        case 'Visa':
          this.creditcardurl = '../../assets/credit-card-logo/Visa.png';
          break;
        case 'MasterCard':
          this.creditcardurl = '../../assets/credit-card-logo/MasterCard.jpeg';
          break;
        case 'American Express':
            this.creditcardurl = '../../assets/credit-card-logo/AmericanExpress.png';
            break;
        case 'Discover':
          this.creditcardurl = '../../assets/credit-card-logo/Discover.jpg';
          break;
        case 'JCB':
          this.creditcardurl = '../../assets/credit-card-logo/Jcb.png';
          break;
        case 'Diners Club':
          this.creditcardurl = '../../assets/credit-card-logo/DinersClub.png';
          break;
        case 'Maestro':
          this.creditcardurl = '../../assets/credit-card-logo/Maestro.png';
          break;
      }
    });
  }

  newPaymentForm() {
    this.FormPayment = this.fb.group({
      cardnumber: [
        '',
        Validators.compose([
          Validators.required,
          Validacoes.CheckCreditCard
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
      ],
      paymentmethod: [
        '',
        Validators.compose([
          Validators.required
        ])
      ]
    }
    );
  }

  get cardnumber() {
    return this.FormPayment.get('cardnumber');
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
  get paymentmethod() {
    return this.FormPayment.get('paymentmethod');
  }
}
