import { AbstractControl } from '../../../../node_modules/@angular/forms';
import { isValid } from 'cc-validate';

export class Validacoes {
  static ValidaCpf(controle: AbstractControl) {
    const cpf = controle.value;

    let soma = 0;
    let resto: number;
    let valido: boolean;

    const regex = new RegExp('[0-9]{11}');

    if ((
      cpf === '00000000000' ||
      cpf === '11111111111' ||
      cpf === '22222222222' ||
      cpf === '33333333333' ||
      cpf === '44444444444' ||
      cpf === '55555555555' ||
      cpf === '66666666666' ||
      cpf === '77777777777' ||
      cpf === '88888888888' ||
      cpf === '99999999999' ||
      !regex.test(cpf)) && cpf.length > 0
    ) {
      valido = false;
    } else {
      for (let i = 1; i <= 9; i++) {
        // tslint:disable-next-line: radix
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
      }
      resto = (soma * 10) % 11;

      if (resto === 10 || resto === 11) { resto = 0; }
      if (resto !== parseInt(cpf.substring(9, 10))) { valido = false; }

      soma = 0;
      for (let i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
      }
      resto = (soma * 10) % 11;

      if (resto === 10 || resto === 11) { resto = 0; }
      if (resto !== parseInt(cpf.substring(10, 11))) { valido = false; }
      valido = true;
    }

    if (valido) { return null; }

    return { cpfInvalido: true };
  }

  static CombinePwd(controle: AbstractControl) {
    const password = controle.get('password').value;
    const confirmPassword = controle.get('confirmPassword').value;

    if (password === confirmPassword) { return null; }

    controle.get('confirmPassword').setErrors({ senhasNaoCoincidem: true });
  }

  static CheckCreditCard(controle: AbstractControl) {
    const cardnumber = controle.value;
    const validator = isValid(cardnumber);
    // console.log(validator);
    if (validator['isValid']) { return null;
    } else { return { Invalidnumber: true }; }

  }

}
