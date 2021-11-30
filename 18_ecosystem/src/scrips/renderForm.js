import crel from 'crel';
import { validation } from './validation';

function renderForm(arr) {
  const isFormTrue = {
    number: false,
    date: false,
    cvc: false,
    'e-mail': false,
  }
  const formEl = crel(
    'form', {
      class: 'credit-card',
    },
  );

  arr.forEach((element) => {
    const input = crel('input', {
      class: `input ${element.className}`,
      type: element.inputType,
      'data-valid': element.dataAttr,
      maxlength: element.maxLength,
    });
    const labelEl = crel('label', {
      class: 'label',
    }, element.labelText,
    input);

    input.addEventListener('focus', (e) => {
      if(e.target.classList.contains('failed')) {
        e.target.classList.remove('failed');
      }
    })

    input.addEventListener('blur', (e) => {
      if(validation(e.target.value, e.target.dataset.valid)) {
        e.target.classList.add('sucsess');
        isFormTrue[e.target.dataset.valid] = true;
      } else {
        e.target.classList.add('failed');
        isFormTrue[e.target.dataset.valid] = false;
        console.log(!Object.values(isFormTrue).includes(false))
      }
      if(!Object.values(isFormTrue).includes(false)) {
        document.querySelector('.button').removeAttribute('disabled')
      } else {
        !document.querySelector('.button').hasAttribute('disabled') ?
        document.querySelector('.button').setAttribute('disabled', 'disabled') :
        null;
      }
    })

    formEl.append(labelEl);
  });

  const buttonEl = crel(
    'button', {
      class:'button',
      type:'submit',
      disabled: 'disabled'
    }, 'Отправить'
  )
  formEl.append(buttonEl)
  return formEl;
}

export default renderForm;
