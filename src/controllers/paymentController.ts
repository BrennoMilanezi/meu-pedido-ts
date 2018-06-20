import { Request, Response } from "express";

export let render = async (req: Request, res: Response) => {
    if(req.session.cpf){
        res.render('payment')
    }
    else{
        res.redirect('/')
    }
}