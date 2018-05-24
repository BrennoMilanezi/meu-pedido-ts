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
const funcionario_1 = require("./funcionario");
let Usuario = class Usuario {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Usuario.prototype, "usuarioId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "nome", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "cpf", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Usuario.prototype, "senha", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Usuario.prototype, "tipo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Usuario.prototype, "status", void 0);
__decorate([
    typeorm_1.OneToOne(type => cliente_1.Cliente),
    typeorm_1.JoinColumn(),
    __metadata("design:type", cliente_1.Cliente)
], Usuario.prototype, "cliente", void 0);
__decorate([
    typeorm_1.OneToOne(type => funcionario_1.Funcionario),
    typeorm_1.JoinColumn(),
    __metadata("design:type", funcionario_1.Funcionario)
], Usuario.prototype, "funcionario", void 0);
Usuario = __decorate([
    typeorm_1.Entity("usuario")
], Usuario);
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.js.map