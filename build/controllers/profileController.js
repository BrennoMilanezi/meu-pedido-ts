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
const typeorm_1 = require("typeorm");
const cliente_1 = require("../entities/cliente");
exports.render = (req, res) => __awaiter(this, void 0, void 0, function* () {
    if (req.session.cpf) {
        let cartoes = yield typeorm_1.getConnection()
            .createQueryBuilder()
            .relation(cliente_1.Cliente, "cartoes");
        console.log(cartoes);
        res.render('profile');
    }
    else {
        res.redirect('/');
    }
});
//# sourceMappingURL=profileController.js.map