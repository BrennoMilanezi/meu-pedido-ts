"use strict";
exports.__esModule = true;
var express = require("express");
var loginController = require("../controllers/loginController");
var signinController = require("../controllers/siginController");
var produtosController = require("../controllers/produtoController");
var feedbackController = require("../controllers/feedbackController");
var profileController = require("../controllers/profileController");
var paymentController = require("../controllers/paymentController");
var app = express();
app.get('/', loginController.render);
app.post('/', loginController.login);
//CLIENTE
app.get('/cadastrar', signinController.render);
app.post('/cadastrar', signinController.save);
app.get('/home', produtosController.render);
app.get('/feedback', feedbackController.render);
app.get('/profile', profileController.render);
app.get('/pagamento', paymentController.render);
app.get('/preencheCampoJS');
//FUNCIONARIO
//Exemplo de sessao com express session
app.get('/foo', function (req, res, next) {
    if (req.session.count) {
        req.session.count++;
        res.setHeader('Content-Type', 'text/html');
        res.send('Nao é a primeira vez acessando: ' + req.session.count);
        res.end();
    }
    else {
        req.session.count = 1;
        res.send('É a primeira vez');
    }
});
/* Exemplo de captura e exibição dos dados com a sessao
res.setHeader('Content-Type', 'text/html')
console.log(req.session.nome)
console.log(req.session.cpf)
console.log(req.session.usuarioId)
*/
module.exports = app;
