"use strict";
exports.__esModule = true;
var cliente_1 = require("../entities/cliente");
var typeorm_1 = require("typeorm");
var ClienteRepo = /** @class */ (function () {
    function ClienteRepo() {
    }
    //PEGA DADOS DO CLIENTE
    ClienteRepo.prototype.getAll = function () {
        return typeorm_1.getManager().getRepository(cliente_1.Cliente).find();
    };
    ClienteRepo.prototype.getCartao = function (clienteId) {
        return typeorm_1.getManager().getRepository(cliente_1.Cliente).find({ where: { clienteId: clienteId }, relations: ["cartoes"] });
    };
    //SALVA CLIENTE BANCO
    ClienteRepo.prototype.saveAny = function (cliente) {
        return typeorm_1.getManager().getRepository(cliente_1.Cliente).save(cliente);
    };
    return ClienteRepo;
}());
exports.ClienteRepo = ClienteRepo;
