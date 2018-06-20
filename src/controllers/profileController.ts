import { Request, Response } from "express";
import {getConnection} from "typeorm";
import { Cliente } from "../entities/cliente";

export let render = async (req: Request, res: Response) => {
    if(req.session.cpf){
        let cartoes = await getConnection()
                            .createQueryBuilder()
                            .relation(Cliente, "cartoes")
        console.log(cartoes)
        res.render('profile')
    }
    else{
        res.redirect('/')
    }
}