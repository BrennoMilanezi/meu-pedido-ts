"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const produtoController_1 = require("../controllers/produtoController");
const loginController_1 = require("../controllers/loginController");
const siginController_1 = require("../controllers/siginController");
const feedbackController_1 = require("../controllers/feedbackController");
const profileController_1 = require("../controllers/profileController");
const paymentController_1 = require("../controllers/paymentController");
const app = express();
let signinController = new siginController_1.SigninController();
let loginController = new loginController_1.LoginController();
let produtosController = new produtoController_1.ProdutoController();
let feedbackController = new feedbackController_1.FeedBackContoller();
let profileController = new profileController_1.ProfileController();
let paymentController = new paymentController_1.PaymentController();
app.get('/', (req, res) => {
    loginController.render(req, res);
});
app.post('/', (req, res) => {
    loginController.login(req, res, signinController);
});
//CLIENTE
app.get('/cadastrar', (req, res) => {
    signinController.render(req, res);
});
app.get('/preencheCampoJS', (req, res) => {
    produtosController.preenche(req, res);
});
app.post('/cadastrar', (req, res) => {
    signinController.save(req, res);
});
app.get('/home', (req, res) => {
    produtosController.render(req, res);
});
app.get('/feedback', (req, res) => {
    feedbackController.render(req, res);
});
app.get('/profile', (req, res) => {
    profileController.render(req, res);
});
app.get('/pagamento', (req, res) => {
    paymentController.render(req, res);
});
app.get('/preencheCampoJS', (req, res) => {
    produtosController.preenche(req, res);
});
module.exports = app;
//# sourceMappingURL=index.js.map