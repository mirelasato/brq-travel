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
  value = 0 ;

  creditcard = document.getElementById('creditcard');
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.newPaymentForm();
    this.Listentochanges();
    this.getTotal();
  }

  getTotal() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.forEach(element => {
      this.value = this.value + (element.product.valor * element.quantity);
    });
  }

  NewPayment() {
    const FormData = this.FormPayment.value;
    console.log(FormData);
  }

  Listentochanges() {

    this.FormPayment.controls[' cardnumber '].valueChanges.subscribe(value => {
      // console.log(value);
      const cardnumber = isValid(value);
      switch (cardnumber[' cardType ']) {
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
      expirationmonth: [
        '',
        Validators.compose([
          Validators.required
        ])
      ],
      expirationyear: [
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
          Validators.required,
          Validacoes.ValidaCpf,
          Validators.maxLength(11)
        ])
      ],
      phone: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]{5,11}')
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
  get phone() {
    return this.FormPayment.get('phone');
  }
  get paymentmethod() {
    return this.FormPayment.get('paymentmethod');
  }
}
