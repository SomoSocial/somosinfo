'use strict';

module.exports = function(Oscip) {
  Oscip.validatesPresenceOf(
    'cnpj',
    'name',
    'address',
    'cep',
    'city',
    'phone',
    'uf',
    'publications',
    'purposes'
  );
  Oscip.validate('cnpj', 'cep', 'phone', digitValidator, {
    message: 'Não são números!',
  });
  function digitValidator(err) {
    if (isNaN(this.cnpj) || isNaN(this.cep) || isNaN(this.phone)) err();
  };
  Oscip.validatesUniquenessOf('cnpj', {message: 'CNPJ já está cadastrado!'});
  Oscip.validatesLengthOf('cnpj', {is: 14, message: {
    is: 'CNPJ tem que possuir exatamente 14 dígitos!'},
  });
  Oscip.validatesLengthOf('cep', {is: 8, message: {
    is: 'CEP tem que possuir exatamente 8 dígitos!'},
  });
  Oscip.validatesLengthOf('uf', {is: 2, message: {
    is: 'Unidade federativa tem que ter 2 letras apenas!'},
  });
};
