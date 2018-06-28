"use strict";
exports.__esModule = true;
var express = require("express");
var produtoController_1 = require("../controllers/produtoController");
var loginController_1 = require("../controllers/loginController");
var siginController_1 = require("../controllers/siginController");
var feedbackController_1 = require("../controllers/feedbackController");
var profileController_1 = require("../controllers/profileController");
var paymentController_1 = require("../controllers/paymentController");
var app = express();
var signinController = new siginController_1.SigninController();
var loginController = new loginController_1.LoginController();
var produtosController = new produtoController_1.ProdutoController();
var feedbackController = new feedbackController_1.FeedBackContoller();
var profileController = new profileController_1.ProfileController();
var paymentController = new paymentController_1.PaymentController();
app.get('/', function (req, res) {
    loginController.render(req, res);
});
app.post('/', function (req, res) {
    loginController.login(req, res, signinController);
});
//CLIENTE
app.get('/cadastrar', function (req, res) {
    signinController.render(req, res);
});
app.get('/preencheCampoJS', prodController.preenche);
app.post('/cadastrar', function (req, res) {
    signinController.save(req, res);
});
app.get('/home', function (req, res) {
    produtosController.render(req, res);
});
app.get('/feedback', function (req, res) {
    feedbackController.render(req, res);
});
app.get('/profile', function (req, res) {
    profileController.render(req, res);
});
app.get('/pagamento', function (req, res) {
    paymentController.render(req, res);
});
app.get('/preencheCampoJS', function (req, res) {
    produtosController.preenche(req, res);
});
module.exports = app;
