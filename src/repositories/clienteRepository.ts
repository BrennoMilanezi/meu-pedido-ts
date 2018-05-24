import { Cliente } from "../entities/cliente";
import { getManager } from "typeorm";

export class ClienteRepo {
    
    //PEGA DADOS DO CLIENTE
    getAll() {
        return getManager().getRepository(Cliente).find();
    }
    
    //SALVA CLIENTE BANCO
    saveAny(cliente: Cliente) { 
          return getManager().getRepository(Cliente).save(cliente);
    }
}