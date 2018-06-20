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
const usuarioRepository_1 = require("../repositories/usuarioRepository");
exports.render = (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.render('index', { title: 'Meu Pedido', error: null });
});
exports.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
    //RETORNA TODOS OS USUARIOS CADSTRADOS NO BANCO
    let userRepo = new usuarioRepository_1.UsuarioRepo();
    let login = req.body.login;
    let senha = req.body.senha;
    let finded = 0;
    userRepo.getAll().then((result) => {
        result.forEach((usr) => {
            console.log(usr);
            if (login === usr.email && senha === usr.senha && usr.status == 1) {
                finded = 1;
                req.session.nome = usr.nome;
                req.session.cpf = usr.cpf;
                //req.session.cliente = usr.clienteClienteId;
                if (usr.tipo == 1) {
                    res.redirect('/home');
                }
                else {
                    res.redirect('/funcionario/home');
                }
            }
        });
        if (!finded) {
            res.render('index', { title: 'Meu Pedido', error: 'Login nao realizado' });
        }
    });
});
//# sourceMappingURL=loginController.js.map