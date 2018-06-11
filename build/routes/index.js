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
app.get('/cadastrar', signinController.render);
app.post('/cadastrar', signinController.save);
app.get('/home', produtosController.render);
app.get('/feedback', feedbackController.render);
app.get('/profile', profileController.render);
app.get('/payment', paymentController.render);
app.get('/foo', function (req, res, next) {
    var sessData = req.session;
    res.send(sessData.secret);
});
app.get('/bar', function (req, res, next) {
    var someAttribute = req.session.someAttribute;
    res.send(`This will print the attribute I set earlier: ${someAttribute}`);
});
module.exports = app;
//# sourceMappingURL=index.js.map