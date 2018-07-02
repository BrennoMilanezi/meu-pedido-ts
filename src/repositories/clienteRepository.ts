import { Cliente } from "../entities/cliente";
import { getManager } from "typeorm";
import { ClienteDAO } from "./DAO/clienteDAO"

export class ClienteRepo implements ClienteDAO<Cliente>{
    
    //PEGA DADOS DO CLIENTE
    getAll(): Promise<Cliente[]> {
        return getManager().getRepository(Cliente).find();
    }
    
    getCartao(clienteId: number): Promise<Cliente[]>{
        return getManager().getRepository(Cliente).find({where : {clienteId: clienteId}, relations: ["cartoes"]})
    }
    
    //SALVA CLIENTE BANCO
    saveAny(cliente: Cliente) { 
         return getManager().getRepository(Cliente).save(cliente);
    }
}