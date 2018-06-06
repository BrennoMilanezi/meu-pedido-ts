"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const loginController = require("../controllers/loginController");
const signinController = require("../controllers/siginController");
const produtosController = require("../controllers/produtoController");
const app = express();
app.get('/', loginController.render);
app.post('/', loginController.login);
app.get('/cadastrar', signinController.render);
app.post('/cadastrar', signinController.save);
app.get('/home', produtosController.render);
module.exports = app;
//# sourceMappingURL=index.js.map