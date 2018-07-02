import { Request, Response } from "express";
import { ProdutoRepo } from "../repositories/produtoRepository";
import { ProdutoDAO } from "../repositories/DAO/produtoDAO";
import { Produto } from "../entities/produto";

export class ProdutoController {
    
    private prodRepo: ProdutoDAO<Produto>;
    private prod: Produto;
    
    constructor(){
        
        this.prodRepo = new ProdutoRepo();
        this.prod = new Produto();
            
    }
    async render(req: Request, res: Response){
        if(req.session.cpf){
            this.prodRepo.getAll().then((result: any) => {
                res.render('home', {produtos: result})
            });
        }
        else{
            res.redirect('/')
        }
    };
    
    async save(req: Request, res: Response){
        this.prod.nome = req.body.nome;
        this.prod.preco = req.body.preco;
        this.prod.quantidade = req.body.quantidade;
        this.prod.tipo = req.body.tipo;
    
        this.prodRepo.saveAny(this.prod)
    };
    
    async preenche(req: Request, res: Response){
        if(req.session.cpf){
            res.render('preencheCampoJS')
        }
        else{
            res.redirect('/')
        }
    }
}
