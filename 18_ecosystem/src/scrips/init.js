import cardFields from './fieldsData';
import mask from './mask';
import renderForm from './renderForm';

function init() {
  document.getElementById('app').append(renderForm(cardFields));
  mask();
}

export default init;
