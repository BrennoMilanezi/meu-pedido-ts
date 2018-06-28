import { Request, Response } from "express";
import {getConnection} from "typeorm";
import { Cliente } from "../entities/cliente";
import { ClienteRepo } from "../repositories/clienteRepository";

export class PaymentController{
    async render(req: Request, res: Response){
        if(req.session.cpf){
            let clienteRepo: ClienteRepo = new ClienteRepo();
            
            clienteRepo.getCartao(req.session.cliente).then((result) => {
                let cartoes = result[0].cartoes
                res.render('payment', {cartoes: cartoes})
            })
        }
        else{
            res.redirect('/')
        }
    }
}