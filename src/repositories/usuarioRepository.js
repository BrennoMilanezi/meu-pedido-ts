"use strict";
exports.__esModule = true;
var usuario_1 = require("../entities/usuario");
var typeorm_1 = require("typeorm");
var UsuarioRepo = /** @class */ (function () {
    function UsuarioRepo() {
    }
    UsuarioRepo.prototype.getOne = function (login, password) {
        return typeorm_1.getManager().getRepository(usuario_1.Usuario).find({ where: { email: login, senha: password }, relations: ["cliente"] });
    };
    UsuarioRepo.prototype.getByCpf = function (cpf) {
        return typeorm_1.getManager().getRepository(usuario_1.Usuario).find({ where: { cpf: cpf }, relations: ["cliente"] });
    };
    UsuarioRepo.prototype.saveAny = function (usuario) {
        return typeorm_1.getManager().getRepository(usuario_1.Usuario).save(usuario);
    };
    return UsuarioRepo;
}());
exports.UsuarioRepo = UsuarioRepo;
