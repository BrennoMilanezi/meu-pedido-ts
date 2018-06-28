"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var usuarioRepository_1 = require("../../repositories/usuarioRepository");
var clienteRepository_1 = require("../../repositories/clienteRepository");
var EditState = /** @class */ (function () {
    function EditState(jan) {
        this.jan = jan;
        this.userRepo = new usuarioRepository_1.UsuarioRepo();
        this.clienteRepo = new clienteRepository_1.ClienteRepo();
    }
    EditState.prototype.setNextState = function (nextState) {
        this.nextState = nextState;
    };
    EditState.prototype.getNextState = function () {
        return this.nextState;
    };
    EditState.prototype.render = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (req.session.cpf) {
                    this.userRepo.getByCpf(req.session.cpf).then(function (result) {
                        res.render('signin', { title: 'Editar dados', user: result[0] });
                    });
                }
                else {
                    res.redirect('/');
                }
                return [2 /*return*/];
            });
        });
    };
    EditState.prototype.save = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                //RECEBE OS DADOS DO FORM
                //CRIA UM NOVO CLIENTE/USUARIO
                this.userRepo.getByCpf(req.session.cpf).then(function (usr) {
                    var cliente = usr[0].cliente;
                    cliente.telefone = req.body.telefone;
                    cliente.nascimento = req.body.data_nascimento;
                    usr[0].nome = req.body.nome;
                    usr[0].cpf = req.body.cpf;
                    usr[0].email = req.body.email;
                    usr[0].senha = req.body.senha;
                    usr[0].cliente = cliente;
                    //COMUNICA COM O REPOSITORY PARA SALVAR NO BANCO
                    _this.clienteRepo.saveAny(cliente);
                    _this.userRepo.saveAny(usr[0]);
                    res.redirect('/cadastrar');
                });
                return [2 /*return*/];
            });
        });
    };
    return EditState;
}());
exports.EditState = EditState;
