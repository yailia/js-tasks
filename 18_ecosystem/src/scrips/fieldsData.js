const cardFields = [
  {
    labelText: 'Card Number',
    inputType: 'text',
    className: 'input_number',
    dataAttr: 'number',
    maxLength: 19,
  },
  {
    labelText: 'Expiration Date',
    inputType: 'text',
    className: 'input_exp-date',
    dataAttr: 'date',
    maxLength: 5,
  },
  {
    labelText: 'CVC/CVV',
    inputType: 'text',
    className: 'input_cvc',
    dataAttr: 'cvc',
    maxLength: 3,
  },
  {
    labelText: 'E-mail',
    inputType: 'e-mail',
    className: 'input_e-mail',
    dataAttr: 'e-mail',
    maxLength: 100,
  },
];

export default cardFields;
