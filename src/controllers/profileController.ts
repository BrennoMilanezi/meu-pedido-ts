import { Request, Response } from "express";
import {getConnection} from "typeorm";
import { Cliente } from "../entities/cliente";
import { ClienteRepo } from "../repositories/clienteRepository";
import { ClienteDAO } from "../repositories/DAO/clienteDAO";

export class ProfileController{
    
    private clienteRepo: ClienteDAO<Cliente>;
    
    constructor(){
        this.clienteRepo = new ClienteRepo();
    }
    async render(req: Request, res: Response){
        if(req.session.cpf){
            
            this.clienteRepo.getCartao(req.session.cliente).then((result) => {
                let cartoes = result[0].cartoes
                res.render('profile', {cartoes: cartoes})
            })
        }
        else{
            res.redirect('/')
        }
    }
}