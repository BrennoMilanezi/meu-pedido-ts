"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const loginController = require("../controllers/loginController");
const signinController = require("../controllers/siginController");
const produtosController = require("../controllers/produtoController");
const feedbackController = require("../controllers/feedbackController");
const profileController = require("../controllers/profileController");
const paymentController = require("../controllers/paymentController");
const app = express();
app.get('/', loginController.render);
app.post('/', loginController.login);
//CLIENTE
app.get('/cadastrar', signinController.render);
app.post('/cadastrar', signinController.save);
app.get('/home', produtosController.render);
app.get('/feedback', feedbackController.render);
app.get('/profile', profileController.render);
app.get('/pagamento', paymentController.render);
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
//# sourceMappingURL=index.js.map