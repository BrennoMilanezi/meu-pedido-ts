"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var cliente_1 = require("./cliente");
var funcionario_1 = require("./funcionario");
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Usuario.prototype, "usuarioId");
    __decorate([
        typeorm_1.Column()
    ], Usuario.prototype, "nome");
    __decorate([
        typeorm_1.Column()
    ], Usuario.prototype, "cpf");
    __decorate([
        typeorm_1.Column()
    ], Usuario.prototype, "email");
    __decorate([
        typeorm_1.Column()
    ], Usuario.prototype, "senha");
    __decorate([
        typeorm_1.Column()
    ], Usuario.prototype, "tipo");
    __decorate([
        typeorm_1.Column()
    ], Usuario.prototype, "status");
    __decorate([
        typeorm_1.OneToOne(function (type) { return cliente_1.Cliente; }),
        typeorm_1.JoinColumn()
    ], Usuario.prototype, "cliente");
    __decorate([
        typeorm_1.OneToOne(function (type) { return funcionario_1.Funcionario; }),
        typeorm_1.JoinColumn()
    ], Usuario.prototype, "funcionario");
    Usuario = __decorate([
        typeorm_1.Entity("usuario")
    ], Usuario);
    return Usuario;
}());
exports.Usuario = Usuario;
