"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var compra_1 = require("./compra");
var Cartao = /** @class */ (function () {
    function Cartao() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Cartao.prototype, "cartaoId");
    __decorate([
        typeorm_1.Column()
    ], Cartao.prototype, "titular");
    __decorate([
        typeorm_1.Column()
    ], Cartao.prototype, "numero");
    __decorate([
        typeorm_1.Column()
    ], Cartao.prototype, "cod_seguranca");
    __decorate([
        typeorm_1.Column({
            type: "date"
        })
    ], Cartao.prototype, "vencimento");
    __decorate([
        typeorm_1.OneToMany(function (type) { return compra_1.Compra; }, function (compra) { return compra.cliente; })
    ], Cartao.prototype, "compras");
    Cartao = __decorate([
        typeorm_1.Entity("cartao")
    ], Cartao);
    return Cartao;
}());
exports.Cartao = Cartao;
