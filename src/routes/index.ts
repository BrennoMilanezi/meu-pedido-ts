import * as express from 'express';
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

module.exports = app
