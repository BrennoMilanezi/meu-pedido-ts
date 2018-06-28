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
<<<<<<< HEAD
=======
<<<<<<< HEAD
class LoginController {
    render(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.render('index', { title: 'Meu Pedido', error: null });
        });
    }
    ;
    login(req, res, signinController) {
        return __awaiter(this, void 0, void 0, function* () {
            //RETORNA TODOS OS USUARIOS CADSTRADOS NO BANCO
            let userRepo = new usuarioRepository_1.UsuarioRepo();
            let login = req.body.login;
            let senha = req.body.senha;
            let finded = 0;
            userRepo.getOne(login, senha).then((result) => {
                //console.log(result)
                if (result.length == 1) {
                    req.session.nome = result[0].nome;
                    req.session.cpf = result[0].cpf;
                    req.session.cliente = result[0].cliente.clienteId;
                    req.session.tipo = result[0].tipo;
                    if (req.session.tipo === 1) {
                        signinController.changeDataState();
                        res.redirect('/home');
                    }
                    else {
                        res.redirect('/funcionario/home');
                    }
                }
                else {
                    res.render('index', { title: 'Meu Pedido', error: 'Login nao realizado' });
                }
            });
        });
    }
    ;
}
exports.LoginController = LoginController;
=======
>>>>>>> dev
exports.render = (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.render('index', { title: 'Meu Pedido', error: null });
});
exports.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
    //RETORNA TODOS OS USUARIOS CADSTRADOS NO BANCO
    let userRepo = new usuarioRepository_1.UsuarioRepo();
    let login = req.body.login;
    let senha = req.body.senha;
    let finded = 0;
<<<<<<< HEAD
    userRepo.getAll().then((result) => {
        result.forEach((usr) => {
            if (login === usr.email && senha === usr.senha) {
                finded = 1;
                res.redirect('/home');
            }
        });
        if (!finded) {
=======
    userRepo.getOne(login, senha).then((result) => {
        //console.log(result)
        if (result.length == 1) {
            req.session.nome = result[0].nome;
            req.session.cpf = result[0].cpf;
            req.session.cliente = result[0].cliente.clienteId;
            req.session.tipo = result[0].tipo;
            if (req.session.tipo === 1) {
                res.redirect('/home');
            }
            else {
                res.redirect('/funcionario/home');
            }
        }
        else {
>>>>>>> dev
            res.render('index', { title: 'Meu Pedido', error: 'Login nao realizado' });
        }
    });
});
<<<<<<< HEAD
=======
>>>>>>> 526a142a350f7b6087a9a021c79b79cd7c0ec3f6
>>>>>>> dev
//# sourceMappingURL=loginController.js.map