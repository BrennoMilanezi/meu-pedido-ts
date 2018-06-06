import * as express from 'express';

import * as prodController from "../controllers/produtoController";
import * as loginController from '../controllers/loginController';
import * as signinController from '../controllers/siginController';
import * as produtosController from '../controllers/produtoController';

const app = express();

app.get('/', loginController.render)
app.post('/', loginController.login)

app.get('/cadastrar', signinController.render)
app.post('/cadastrar', signinController.save)

app.get('/home', produtosController.render)

module.exports = app
