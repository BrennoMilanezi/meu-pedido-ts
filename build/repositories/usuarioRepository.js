"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("../entities/usuario");
const typeorm_1 = require("typeorm");
class UsuarioRepo {
    getAll() {
        return typeorm_1.getManager().getRepository(usuario_1.Usuario).find();
    }
    getOne(login, password) {
        return typeorm_1.getManager().getRepository(usuario_1.Usuario).find({ where: { email: login, senha: password }, relations: ["cliente"] });
    }
    getByCpf(cpf) {
        return typeorm_1.getManager().getRepository(usuario_1.Usuario).find({ where: { cpf: cpf }, relations: ["cliente"] });
    }
    saveAny(usuario) {
        typeorm_1.getManager().getRepository(usuario_1.Usuario).save(usuario);
    }
}
exports.UsuarioRepo = UsuarioRepo;
//# sourceMappingURL=usuarioRepository.js.map