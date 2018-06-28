"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var usuario_1 = require("./usuario");
var cartao_1 = require("./cartao");
var compra_1 = require("./compra");
var Cliente = /** @class */ (function () {
    function Cliente() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Cliente.prototype, "clienteId");
    __decorate([
        typeorm_1.Column()
    ], Cliente.prototype, "telefone");
    __decorate([
        typeorm_1.Column()
    ], Cliente.prototype, "nascimento");
    __decorate([
        typeorm_1.OneToOne(function (type) { return usuario_1.Usuario; }, function (usr) { return usr.cliente; })
    ], Cliente.prototype, "usr");
    __decorate([
        typeorm_1.ManyToMany(function (type) { return cartao_1.Cartao; }),
        typeorm_1.JoinTable()
    ], Cliente.prototype, "cartoes");
    __decorate([
        typeorm_1.OneToMany(function (type) { return compra_1.Compra; }, function (compra) { return compra.cliente; })
    ], Cliente.prototype, "compras");
    Cliente = __decorate([
        typeorm_1.Entity("cliente")
    ], Cliente);
    return Cliente;
}());
exports.Cliente = Cliente;
