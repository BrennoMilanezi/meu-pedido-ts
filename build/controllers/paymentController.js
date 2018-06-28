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
<<<<<<< HEAD
exports.render = (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.render('payment');
});
=======
const clienteRepository_1 = require("../repositories/clienteRepository");
<<<<<<< HEAD
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
=======
exports.render = (req, res) => __awaiter(this, void 0, void 0, function* () {
    if (req.session.cpf) {
        let clienteRepo = new clienteRepository_1.ClienteRepo();
        clienteRepo.getCartao(req.session.cliente).then((result) => {
            let cartoes = result[0].cartoes;
            res.render('payment', { cartoes: cartoes });
>>>>>>> 526a142a350f7b6087a9a021c79b79cd7c0ec3f6
        });
    }
}
exports.PaymentController = PaymentController;
>>>>>>> dev
//# sourceMappingURL=paymentController.js.map