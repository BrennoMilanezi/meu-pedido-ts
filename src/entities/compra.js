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
var cartao_1 = require("./cartao");
var Compra = /** @class */ (function () {
    function Compra() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Compra.prototype, "compraId");
    __decorate([
        typeorm_1.Column({
            type: "date"
        })
    ], Compra.prototype, "data");
    __decorate([
        typeorm_1.Column({
            type: "text"
        })
    ], Compra.prototype, "texto_avaliacao");
    __decorate([
        typeorm_1.Column()
    ], Compra.prototype, "nota_avaliacao");
    __decorate([
        typeorm_1.ManyToOne(function (type) { return cartao_1.Cartao; }, function (cartao) { return cartao.compras; })
    ], Compra.prototype, "cartao");
    __decorate([
        typeorm_1.ManyToOne(function (type) { return cliente_1.Cliente; }, function (cliente) { return cliente.compras; })
    ], Compra.prototype, "cliente");
    Compra = __decorate([
        typeorm_1.Entity("compra")
    ], Compra);
    return Compra;
}());
exports.Compra = Compra;
