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
var usuario_1 = require("../../entities/usuario");
var cliente_1 = require("../../entities/cliente");
var NewState = /** @class */ (function () {
    function NewState(jan) {
        this.jan = jan;
        this.userRepo = new usuarioRepository_1.UsuarioRepo();
        this.clienteRepo = new clienteRepository_1.ClienteRepo();
    }
    NewState.prototype.setNextState = function (nextState) {
        this.nextState = nextState;
    };
    NewState.prototype.getNextState = function () {
        return this.nextState;
    };
    NewState.prototype.render = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                res.render('signin', { title: 'Cadastrar', user: "" });
                return [2 /*return*/];
            });
        });
    };
    NewState.prototype.save = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var cliente, usr;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cliente = new cliente_1.Cliente();
                        cliente.telefone = req.body.telefone;
                        cliente.nascimento = req.body.data_nascimento;
                        usr = new usuario_1.Usuario();
                        usr.nome = req.body.nome;
                        usr.cpf = req.body.cpf;
                        usr.email = req.body.email;
                        usr.senha = req.body.senha;
                        usr.tipo = 1;
                        usr.status = 1;
                        usr.cliente = cliente;
                        //COMUNICA COM O REPOSITORY PARA SALVAR NO BANCO
                        return [4 /*yield*/, this.clienteRepo.saveAny(cliente)];
                    case 1:
                        //COMUNICA COM O REPOSITORY PARA SALVAR NO BANCO
                        _a.sent();
                        return [4 /*yield*/, this.userRepo.saveAny(usr)];
                    case 2:
                        _a.sent();
                        res.redirect('/');
                        return [2 /*return*/];
                }
            });
        });
    };
    return NewState;
}());
exports.NewState = NewState;
