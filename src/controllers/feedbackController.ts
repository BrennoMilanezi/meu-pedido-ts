import { Request, Response } from "express";

export class FeedBackContoller {
    async render(req: Request, res: Response){
        if(req.session.cpf){
            res.render('feedback')
        }
        else{
            res.redirect('/')
        }
    }
}