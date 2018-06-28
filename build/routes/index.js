"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
<<<<<<< HEAD
const session = require("express-session");
const cookie = require("cookie-parser");
=======
<<<<<<< HEAD
const produtoController_1 = require("../controllers/produtoController");
const loginController_1 = require("../controllers/loginController");
const siginController_1 = require("../controllers/siginController");
const feedbackController_1 = require("../controllers/feedbackController");
const profileController_1 = require("../controllers/profileController");
const paymentController_1 = require("../controllers/paymentController");
=======
const prodController = require("../controllers/produtoController");
>>>>>>> dev
const loginController = require("../controllers/loginController");
const signinController = require("../controllers/siginController");
const produtosController = require("../controllers/produtoController");
const feedbackController = require("../controllers/feedbackController");
const profileController = require("../controllers/profileController");
const paymentController = require("../controllers/paymentController");
<<<<<<< HEAD
const app = express();
app.use(cookie());
app.use(session({ secret: 'this-is-a-secret-token', cookie: { maxAge: 60000 } }));
app.get('/', loginController.render);
app.post('/', loginController.login);
=======
>>>>>>> 526a142a350f7b6087a9a021c79b79cd7c0ec3f6
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
<<<<<<< HEAD
app.get('/cadastrar', (req, res) => {
    signinController.render(req, res);
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
=======
>>>>>>> dev
app.get('/cadastrar', signinController.render);
app.post('/cadastrar', signinController.save);
app.get('/home', produtosController.render);
app.get('/feedback', feedbackController.render);
app.get('/profile', profileController.render);
<<<<<<< HEAD
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
=======
app.get('/pagamento', paymentController.render);
app.get('/preencheCampoJS', prodController.preenche);
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
>>>>>>> 526a142a350f7b6087a9a021c79b79cd7c0ec3f6
>>>>>>> dev
module.exports = app;
//# sourceMappingURL=index.js.map