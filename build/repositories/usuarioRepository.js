"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("../entities/usuario");
const typeorm_1 = require("typeorm");
class UsuarioRepo {
    getOne(login, password) {
        return typeorm_1.getManager().getRepository(usuario_1.Usuario).find({ where: { email: login, senha: password }, relations: ["cliente"] });
<<<<<<< HEAD
    }
    getByCpf(cpf) {
        return typeorm_1.getManager().getRepository(usuario_1.Usuario).find({ where: { cpf: cpf }, relations: ["cliente"] });
=======
>>>>>>> 526a142a350f7b6087a9a021c79b79cd7c0ec3f6
    }
    saveAny(usuario) {
        return typeorm_1.getManager().getRepository(usuario_1.Usuario).save(usuario);
    }
}
exports.UsuarioRepo = UsuarioRepo;
//# sourceMappingURL=usuarioRepository.js.map