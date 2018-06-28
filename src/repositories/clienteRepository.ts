import { Cliente } from "../entities/cliente";
import { getManager } from "typeorm";

export class ClienteRepo {
    
    //PEGA DADOS DO CLIENTE
    getAll() {
        return getManager().getRepository(Cliente).find();
    }
    
    getCartao(clienteId: number){
        return getManager().getRepository(Cliente).find({where : {clienteId: clienteId}, relations: ["cartoes"]})
    }
    
    //SALVA CLIENTE BANCO
    saveAny(cliente: Cliente) { 
         return getManager().getRepository(Cliente).save(cliente);
    }
}