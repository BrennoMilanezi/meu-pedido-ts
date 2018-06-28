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
const usuarioRepository_1 = require("../repositories/usuarioRepository");
const clienteRepository_1 = require("../repositories/clienteRepository");
const usuario_1 = require("../entities/usuario");
const cliente_1 = require("../entities/cliente");
exports.render = (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.render('signin');
});
exports.save = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let userRepo = new usuarioRepository_1.UsuarioRepo();
    let clienteRepo = new clienteRepository_1.ClienteRepo();
    //RECEBE OS DADOS DO FORM
    //CRIA UM NOVO CLIENTE/USUARIO
    let cliente = new cliente_1.Cliente();
    cliente.telefone = req.body.telefone;
    cliente.nascimento = req.body.data_nascimento;
    let usr = new usuario_1.Usuario();
    usr.nome = req.body.nome;
    usr.cpf = req.body.cpf;
    usr.email = req.body.email;
    usr.senha = req.body.senha;
    usr.tipo = 1;
    usr.status = 1;
    usr.cliente = cliente;
    //COMUNICA COM O REPOSITORY PARA SALVAR NO BANCO
    yield clienteRepo.saveAny(cliente);
    yield userRepo.saveAny(usr);
    res.redirect('/');
});
=======
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
>>>>>>> dev
//# sourceMappingURL=siginController.js.map