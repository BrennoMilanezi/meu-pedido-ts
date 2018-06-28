import * as express from 'express';
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

app.get('/preencheCampoJS', prodController.preenche)

app.post('/cadastrar', (req, res) => {
  signinController.save(req, res);  
})

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

module.exports = app
