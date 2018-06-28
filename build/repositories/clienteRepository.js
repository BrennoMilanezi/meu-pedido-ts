"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cliente_1 = require("../entities/cliente");
const typeorm_1 = require("typeorm");
class ClienteRepo {
    //PEGA DADOS DO CLIENTE
    getAll() {
        return typeorm_1.getManager().getRepository(cliente_1.Cliente).find();
    }
    getCartao(clienteId) {
        return typeorm_1.getManager().getRepository(cliente_1.Cliente).find({ where: { clienteId: clienteId }, relations: ["cartoes"] });
    }
    //SALVA CLIENTE BANCO
    saveAny(cliente) {
        return typeorm_1.getManager().getRepository(cliente_1.Cliente).save(cliente);
    }
}
exports.ClienteRepo = ClienteRepo;
//# sourceMappingURL=clienteRepository.js.map