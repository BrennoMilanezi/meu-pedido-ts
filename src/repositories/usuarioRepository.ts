import { Usuario } from "../entities/usuario";
import { getManager } from "typeorm";

export class UsuarioRepo {
    
    getAll() {
        return getManager().getRepository(Usuario).find();
    }

    saveAny(usuario: Usuario) { 
          return getManager().getRepository(Usuario).save(usuario);
    }
}