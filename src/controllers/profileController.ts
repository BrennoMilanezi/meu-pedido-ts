import { Request, Response } from "express";
import {getConnection} from "typeorm";
import { Cliente } from "../entities/cliente";
import { ClienteRepo } from "../repositories/clienteRepository";

export let render = async (req: Request, res: Response) => {
    if(req.session.cpf){
        let clienteRepo: ClienteRepo = new ClienteRepo();
        
        clienteRepo.getCartao(req.session.cliente).then((result) => {
            let cartoes = result[0].cartoes
            res.render('profile', {cartoes: cartoes})
        })
    }
    else{
        res.redirect('/')
    }
}