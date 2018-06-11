import * as express from 'express';

import * as prodController from "../controllers/produtoController";
import * as loginController from '../controllers/loginController';
import * as signinController from '../controllers/siginController';
import * as produtosController from '../controllers/produtoController';
import * as feedbackController from '../controllers/feedbackController';
import * as profileController from '../controllers/profileController';
import * as paymentController from '../controllers/paymentController';

const app = express();

app.get('/', loginController.render)
app.post('/', loginController.login)

app.get('/cadastrar', signinController.render)
app.post('/cadastrar', signinController.save)

app.get('/home', produtosController.render)

app.get('/feedback', feedbackController.render)

app.get('/profile', profileController.render)

app.get('/payment', paymentController.render)

app.get('/foo', function(req, res, next) {
  var sessData = req.session;
  res.send(sessData.secret);
});


app.get('/bar', function(req, res, next) {
  var someAttribute = req.session.someAttribute;
  res.send(`This will print the attribute I set earlier: ${someAttribute}`);
});

module.exports = app
