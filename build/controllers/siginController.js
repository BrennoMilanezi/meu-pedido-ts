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
const janDados_1 = require("./signinStates/janDados");
class SigninController {
    constructor() {
        this.janDados = new janDados_1.JanDados();
    }
    render(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.janDados.render(req, res);
        });
    }
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            this.janDados.save(req, res);
        });
    }
    changeDataState() {
        return __awaiter(this, void 0, void 0, function* () {
            this.janDados.changeDataState();
        });
    }
}
exports.SigninController = SigninController;
//# sourceMappingURL=siginController.js.map