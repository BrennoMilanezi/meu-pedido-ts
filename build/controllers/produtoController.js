"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const produtoRepository_1 = require("../repositories/produtoRepository");
const produto_1 = require("../entities/produto");
exports.render = (req, res) => __awaiter(this, void 0, void 0, function* () {
    if (req.session.cpf) {
        let prodRepo = new produtoRepository_1.ProdutoRepo();
        prodRepo.getAllProdutos().then((result) => {
            res.render('home', { produtos: result });
        });
    }
    else {
        res.redirect('/');
    }
});
exports.save = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let prodRepo = new produtoRepository_1.ProdutoRepo();
    let prod = new produto_1.Produto();
    prod.nome = req.body.nome;
    prod.preco = req.body.preco;
    prod.quantidade = req.body.quantidade;
    prod.tipo = req.body.tipo;
    prodRepo.saveProduto(prod).then((result) => {
        console.log("Result : " + result);
        res.send(result);
    });
});
//# sourceMappingURL=produtoController.js.map