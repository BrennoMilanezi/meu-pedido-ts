"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const produto_1 = require("../entities/produto");
const typeorm_1 = require("typeorm");
class ProdutoRepo {
    saveAny(obj) {
        typeorm_1.getManager().getRepository(produto_1.Produto).save(obj);
    }
    getAll() {
        return typeorm_1.getManager().getRepository(produto_1.Produto).find();
    }
}
exports.ProdutoRepo = ProdutoRepo;
//# sourceMappingURL=produtoRepository.js.map