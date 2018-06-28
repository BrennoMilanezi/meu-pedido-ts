import { Request, Response } from "express";
import {getConnection} from "typeorm";
import { Cliente } from "../entities/cliente";
import { ClienteRepo } from "../repositories/clienteRepository";

<<<<<<< HEAD
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
=======
export let render = async (req: Request, res: Response) => {
    if(req.session.cpf){
        let clienteRepo: ClienteRepo = new ClienteRepo();
        
        clienteRepo.getCartao(req.session.cliente).then((result) => {
            let cartoes = result[0].cartoes
            res.render('payment', {cartoes: cartoes})
        })
    }
    else{
        res.redirect('/')
>>>>>>> 526a142a350f7b6087a9a021c79b79cd7c0ec3f6
    }
}