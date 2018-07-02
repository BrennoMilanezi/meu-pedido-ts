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
const clienteRepository_1 = require("../repositories/clienteRepository");
class ProfileController {
    constructor() {
        this.clienteRepo = new clienteRepository_1.ClienteRepo();
    }
    render(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.session.cpf) {
                this.clienteRepo.getCartao(req.session.cliente).then((result) => {
                    let cartoes = result[0].cartoes;
                    res.render('profile', { cartoes: cartoes });
                });
            }
            else {
                res.redirect('/');
            }
        });
    }
}
exports.ProfileController = ProfileController;
//# sourceMappingURL=profileController.js.map