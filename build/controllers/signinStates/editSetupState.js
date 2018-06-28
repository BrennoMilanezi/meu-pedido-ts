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
class EditState {
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
            if (req.session.cpf) {
                this.userRepo.getByCpf(req.session.cpf).then((result) => {
                    res.render('signin', { title: 'Editar dados', user: result[0] });
                });
            }
            else {
                res.redirect('/');
            }
        });
    }
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //RECEBE OS DADOS DO FORM
            //CRIA UM NOVO CLIENTE/USUARIO
            this.userRepo.getByCpf(req.session.cpf).then((usr) => {
                let cliente = usr[0].cliente;
                cliente.telefone = req.body.telefone;
                cliente.nascimento = req.body.data_nascimento;
                usr[0].nome = req.body.nome;
                usr[0].cpf = req.body.cpf;
                usr[0].email = req.body.email;
                usr[0].senha = req.body.senha;
                usr[0].cliente = cliente;
                //COMUNICA COM O REPOSITORY PARA SALVAR NO BANCO
                this.clienteRepo.saveAny(cliente);
                this.userRepo.saveAny(usr[0]);
                res.redirect('/cadastrar');
            });
        });
    }
}
exports.EditState = EditState;
//# sourceMappingURL=editSetupState.js.map