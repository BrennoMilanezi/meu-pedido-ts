"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const cliente_1 = require("./cliente");
const cartao_1 = require("./cartao");
let Compra = class Compra {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Compra.prototype, "compraId", void 0);
__decorate([
    typeorm_1.Column({
        type: "date"
    }),
    __metadata("design:type", String)
], Compra.prototype, "data", void 0);
__decorate([
    typeorm_1.Column({
        type: "text"
    }),
    __metadata("design:type", String)
], Compra.prototype, "texto_avaliacao", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Compra.prototype, "nota_avaliacao", void 0);
__decorate([
    typeorm_1.ManyToOne(type => cartao_1.Cartao, cartao => cartao.compras),
    __metadata("design:type", cartao_1.Cartao)
], Compra.prototype, "cartao", void 0);
__decorate([
    typeorm_1.ManyToOne(type => cliente_1.Cliente, cliente => cliente.compras),
    __metadata("design:type", cliente_1.Cliente)
], Compra.prototype, "cliente", void 0);
Compra = __decorate([
    typeorm_1.Entity("compra")
], Compra);
exports.Compra = Compra;
//# sourceMappingURL=compra.js.map