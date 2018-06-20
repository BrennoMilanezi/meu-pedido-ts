import { Usuario } from "../entities/usuario";
import { getManager } from "typeorm";

export class UsuarioRepo {
    
    getAll(login: String, password: String) {
        return getManager().getRepository(Usuario).relation(Usuario, "cliente").find();
    }

    saveAny(usuario: Usuario) { 
          return getManager().getRepository(Usuario).save(usuario);
    }
}