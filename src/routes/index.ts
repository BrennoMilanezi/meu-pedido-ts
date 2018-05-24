import * as express from 'express';

import * as prodController from "../controllers/produtoController";
import * as usuarioController from "../controllers/usuarioController";
const app = express();

app.get("/prod", prodController.getAll);
app.post("/prod", prodController.save);

app.get('/usr', usuarioController.getAll)
app.post('/usr', usuarioController.save)

app.get('/', usuarioController.render)

module.exports = app
