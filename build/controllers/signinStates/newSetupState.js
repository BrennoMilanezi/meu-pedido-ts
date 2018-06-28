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
const usuarioRepository_1 = require("../../repositories/usuarioRepository");
const clienteRepository_1 = require("../../repositories/clienteRepository");
const usuario_1 = require("../../entities/usuario");
const cliente_1 = require("../../entities/cliente");
class NewState {
    constructor(jan) {
        this.jan = jan;
        this.userRepo = new usuarioRepository_1.UsuarioRepo();
        this.clienteRepo = new clienteRepository_1.ClienteRepo();
    }
    setNextState(nextState) {
        this.nextState = nextState;
    }
    getNextState() {
        return this.nextState;
    }
    render(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.render('signin', { title: 'Cadastrar', user: "" });
        });
    }
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
            yield this.clienteRepo.saveAny(cliente);
            yield this.userRepo.saveAny(usr);
            res.redirect('/');
        });
    }
}
exports.NewState = NewState;
//# sourceMappingURL=newSetupState.js.map