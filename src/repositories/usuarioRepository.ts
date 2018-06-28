import { Usuario } from "../entities/usuario";
import { getManager } from "typeorm";

export class UsuarioRepo {
    
    getOne(login: string, password: string) {
        return getManager().getRepository(Usuario).find({where : {email: login, senha: password}, relations: ["cliente"]})
    }
    
    getByCpf(cpf: string){
        return getManager().getRepository(Usuario).find({where: {cpf: cpf}, relations: ["cliente"]})
    }

    
    saveAny(usuario: Usuario) { 
          return getManager().getRepository(Usuario).save(usuario);
    }
}