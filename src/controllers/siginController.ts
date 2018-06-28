import { Request, Response } from "express";
import { JanDados } from './signinStates/janDados';

export class SigninController {
    private janDados: JanDados = new JanDados();
    
   async render(req: Request, res: Response){
       this.janDados.render(req, res);
   }
   
   async save(req: Request, res: Response){
       this.janDados.save(req, res);
   }
   
   async changeDataState(){
       this.janDados.changeDataState();
   } 
}