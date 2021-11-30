import cardValidator from "card-validator";
import * as EmailValidator from 'email-validator'

export function validation(value, dataset) {
  switch(dataset) {
    case 'number' :
      return cardValidator.number(value).isValid;

    case 'date' :
      return cardValidator.expirationDate(value).isValid;

    case 'cvc' :
      return cardValidator.cvv(value).isValid;

    case 'e-mail' :
      return EmailValidator.validate(value);
  }
}
