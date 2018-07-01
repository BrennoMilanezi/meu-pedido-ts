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
class PaymentController {
    render(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.session.cpf) {
                let clienteRepo = new clienteRepository_1.ClienteRepo();
                clienteRepo.getCartao(req.session.cliente).then((result) => {
                    let cartoes = result[0].cartoes;
                    res.render('payment', { cartoes: cartoes });
                });
            }
            else {
                res.redirect('/');
            }
        });
    }
}
exports.PaymentController = PaymentController;
//# sourceMappingURL=paymentController.js.map