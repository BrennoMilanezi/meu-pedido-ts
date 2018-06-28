import { Usuario } from "../entities/usuario";
import { getManager } from "typeorm";

export class UsuarioRepo {
    
    getOne(login: string, password: string) {
        return getManager().getRepository(Usuario).find({where : {email: login, senha: password}, relations: ["cliente"]})
<<<<<<< HEAD
    }
    
    getByCpf(cpf: string){
        return getManager().getRepository(Usuario).find({where: {cpf: cpf}, relations: ["cliente"]})
=======
>>>>>>> 526a142a350f7b6087a9a021c79b79cd7c0ec3f6
    }

    
    saveAny(usuario: Usuario) { 
          return getManager().getRepository(Usuario).save(usuario);
    }
}