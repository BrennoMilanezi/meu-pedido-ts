"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const session = require("express-session");
const cookie = require("cookie-parser");
const loginController = require("../controllers/loginController");
const signinController = require("../controllers/siginController");
const produtosController = require("../controllers/produtoController");
const feedbackController = require("../controllers/feedbackController");
const profileController = require("../controllers/profileController");
const paymentController = require("../controllers/paymentController");
const app = express();
app.use(cookie());
app.use(session({ secret: 'this-is-a-secret-token', cookie: { maxAge: 60000 } }));
app.get('/', loginController.render);
app.post('/', loginController.login);
app.get('/cadastrar', signinController.render);
app.post('/cadastrar', signinController.save);
app.get('/home', produtosController.render);
app.get('/feedback', feedbackController.render);
app.get('/profile', profileController.render);
app.get('/payment', paymentController.render);
app.get('/foo', function (req, res, next) {
    if (req.session.n) {
        res.send('Essa página foi acessada ' + req.session.n + ' vezes !');
        req.session.n++;
    }
    else {
        req.session.n = 1;
        res.send({ message: 'Essa é a primeira vez' });
    }
    res.render('testes');
});
app.get('/bar', function (req, res, next) {
    var someAttribute = req.session.someAttribute;
    res.send(`This will print the attribute I set earlier: ${someAttribute}`);
});
module.exports = app;
//# sourceMappingURL=index.js.map