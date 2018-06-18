const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
/*
Given('a variable set to {int}', function(number) {
  this.setTo(number)
})

When('I increment the variable by {int}', function(number) {
  this.incrementBy(number)
})

Then('the variable should contain {int}', function(number) {
  expect(this.variable).to.eql(number)
})
*/
const cadastrarCliente = require('cucumber').cadastrarCliente;
const assert = require('assert');



cadastrarCliente(function({ Given, Then, When }) {
  var validade;
  
  Given('Cliente digitou informacao valida', function (input) {
    
    var cliente = {
    nome:"Jose",
    cpf:"12317252783",
    };
    
  });

  Given('Cliente digitou informacao invalida', function () {
    
    var cliente = {
    nome:"Jose",
    cpf:"abcdefghijkl",
    };
    
  });
  
  When('Cliente confirmar', function (cliente) {
   
    if(isNaN(cliente.cpf)){ 
      validade = false;
    }
    else{
      validade = true;
    }
    
  });
  
  Then('O cadastro não deve ser completado', function () {
 
  });
  
  Then('O cadastro deve ser efetivado ', function(){
    
  });
});