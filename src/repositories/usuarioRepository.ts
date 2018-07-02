import { Usuario } from "../entities/usuario";
import { getManager } from "typeorm";
import { UsuarioDAO } from "./DAO/userDAO"

export class UsuarioRepo implements UsuarioDAO<Usuario>{
    
    getAll(): Promise<Usuario[]>{
        return getManager().getRepository(Usuario).find();
    }
    
    getOne(login: string, password: string): Promise<Usuario[]> {
        return getManager().getRepository(Usuario).find({where : {email: login, senha: password}, relations: ["cliente"]})
    }
    
    getByCpf(cpf: string): Promise<Usuario[]>{
        return getManager().getRepository(Usuario).find({where: {cpf: cpf}, relations: ["cliente"]})

    }
    
    saveAny(usuario: Usuario) { 
          getManager().getRepository(Usuario).save(usuario);
    }
}