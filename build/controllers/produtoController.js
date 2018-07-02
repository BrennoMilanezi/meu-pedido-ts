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
class ProdutoController {
    constructor() {
        this.prodRepo = new produtoRepository_1.ProdutoRepo();
        this.prod = new produto_1.Produto();
    }
    render(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.session.cpf) {
                this.prodRepo.getAll().then((result) => {
                    res.render('home', { produtos: result });
                });
            }
            else {
                res.redirect('/');
            }
        });
    }
    ;
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.prod.nome = req.body.nome;
            this.prod.preco = req.body.preco;
            this.prod.quantidade = req.body.quantidade;
            this.prod.tipo = req.body.tipo;
            this.prodRepo.saveAny(this.prod);
        });
    }
    ;
    preenche(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.session.cpf) {
                res.render('preencheCampoJS');
            }
            else {
                res.redirect('/');
            }
        });
    }
}
exports.ProdutoController = ProdutoController;
//# sourceMappingURL=produtoController.js.map