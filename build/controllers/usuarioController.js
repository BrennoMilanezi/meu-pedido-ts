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
const clienteRepository_1 = require("../repositories/clienteRepository");
const usuario_1 = require("../entities/usuario");
const cliente_1 = require("../entities/cliente");
exports.render = (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.render('index', { title: 'Meu Pedido', error: null });
});
exports.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
    //RETORNA TODOS OS USUARIOS CADSTRADOS NO BANCO
    let userRepo = new usuarioRepository_1.UsuarioRepo();
    console.log("Received getAll ==> GET");
    userRepo.getAll().then((result) => {
        console.log("Result : " + result);
        res.send(result);
    });
});
exports.save = (req, res) => __awaiter(this, void 0, void 0, function* () {
    let userRepo = new usuarioRepository_1.UsuarioRepo();
    let clienteRepo = new clienteRepository_1.ClienteRepo();
    //RECEBE OS DADOS DO FORM
    console.log("Received save ==> POST");
    console.log(req.body);
    //CRIA UM NOVO CLIENTE/USUARIO
    let cliente = new cliente_1.Cliente();
    cliente.telefone = req.body.telefone;
    cliente.nascimento = req.body.nascimento;
    let usr = new usuario_1.Usuario();
    usr.nome = req.body.nome;
    usr.cpf = req.body.cpf;
    usr.email = req.body.email;
    usr.senha = req.body.senha;
    usr.tipo = req.body.tipo;
    usr.status = req.body.status;
    usr.cliente = cliente;
    //COMUNICA COM O REPOSITORY PARA SALVAR NO BANCO
    clienteRepo.saveAny(cliente).then((result) => {
        res.send(result);
    });
    userRepo.saveAny(usr).then((result) => {
        console.log("Result : " + result);
        res.send(result);
    });
});
//# sourceMappingURL=usuarioController.js.map