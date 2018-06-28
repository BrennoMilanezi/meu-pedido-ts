import * as express from 'express';
<<<<<<< HEAD
import * as session from 'express-session';
import * as cookie from 'cookie-parser'

import * as prodController from "../controllers/produtoController";
import * as loginController from '../controllers/loginController';
import * as signinController from '../controllers/siginController';
import * as produtosController from '../controllers/produtoController';
import * as feedbackController from '../controllers/feedbackController';
import * as profileController from '../controllers/profileController';
import * as paymentController from '../controllers/paymentController';

const app = express();
app.use(cookie());
app.use(session({ secret: 'this-is-a-secret-token', cookie: { maxAge: 60000 }}));

app.get('/', loginController.render)
app.post('/', loginController.login)

app.get('/cadastrar', signinController.render)
app.post('/cadastrar', signinController.save)

app.get('/home', produtosController.render)

app.get('/feedback', feedbackController.render)

app.get('/profile', profileController.render)

app.get('/payment', paymentController.render)

app.get('/foo', function(req, res, next) {
  if(req.session.n){
      res.send('Essa página foi acessada '+req.session.n+' vezes !')
      req.session.n++
  }
  else{
      req.session.n = 1
      res.send({message: 'Essa é a primeira vez'})
  }
  res.render('testes')
});

app.get('/bar', function(req, res, next) {
  var someAttribute = req.session.someAttribute;
  res.send(`This will print the attribute I set earlier: ${someAttribute}`);
});
=======
import { Request, Response } from "express";
import { ProdutoController } from "../controllers/produtoController";
import { LoginController } from '../controllers/loginController';
import { SigninController } from '../controllers/siginController';
import { FeedBackContoller } from '../controllers/feedbackController';
import { ProfileController }from '../controllers/profileController';
import { PaymentController } from '../controllers/paymentController';

const app = express();
let signinController: SigninController = new SigninController();
let loginController: LoginController = new LoginController();
let produtosController: ProdutoController = new ProdutoController();
let feedbackController: FeedBackContoller = new FeedBackContoller();
let profileController: ProfileController = new ProfileController();
let paymentController: PaymentController = new PaymentController();

app.get('/', (req, res) => {
  loginController.render(req, res);
})
app.post('/', (req, res) => {
  loginController.login(req, res, signinController);
})


//CLIENTE
app.get('/cadastrar', (req, res) => {
  signinController.render(req, res);
})

<<<<<<< HEAD
app.post('/cadastrar', (req, res) => {
  signinController.save(req, res);  
})
=======
app.get('/preencheCampoJS', prodController.preenche)

>>>>>>> 526a142a350f7b6087a9a021c79b79cd7c0ec3f6

app.get('/home', (req, res) => {
  produtosController.render(req, res);
})

app.get('/feedback', (req, res) => {
  feedbackController.render(req, res);
})

app.get('/profile', (req, res) => {
  profileController.render(req, res);
})

app.get('/pagamento', (req, res) => {
  paymentController.render(req, res);
})

app.get('/preencheCampoJS', (req, res) => {
  produtosController.preenche(req, res)
})
>>>>>>> dev

module.exports = app
