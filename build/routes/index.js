"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const prodController = require("../controllers/produtoController");
const usuarioController = require("../controllers/usuarioController");
const app = express();
app.get("/prod", prodController.getAll);
app.post("/prod", prodController.save);
app.get('/usr', usuarioController.getAll);
app.post('/usr', usuarioController.save);
app.get('/', usuarioController.render);
module.exports = app;
//# sourceMappingURL=index.js.map