"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const produto_1 = require("../entities/produto");
const typeorm_1 = require("typeorm");
class ProdutoRepo {
    getAllProdutos() {
        return typeorm_1.getManager().getRepository(produto_1.Produto).find();
    }
    saveProduto(produto) {
        return typeorm_1.getManager().getRepository(produto_1.Produto).save(produto);
    }
}
exports.ProdutoRepo = ProdutoRepo;
//# sourceMappingURL=produtoRepository.js.map