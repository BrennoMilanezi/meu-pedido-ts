"use strict";
exports.__esModule = true;
var produto_1 = require("../entities/produto");
var typeorm_1 = require("typeorm");
var ProdutoRepo = /** @class */ (function () {
    function ProdutoRepo() {
    }
    ProdutoRepo.prototype.getAllProdutos = function () {
        return typeorm_1.getManager().getRepository(produto_1.Produto).find();
    };
    ProdutoRepo.prototype.saveProduto = function (produto) {
        return typeorm_1.getManager().getRepository(produto_1.Produto).save(produto);
    };
    return ProdutoRepo;
}());
exports.ProdutoRepo = ProdutoRepo;
