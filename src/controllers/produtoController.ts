import { Request, Response } from "express";
import { ProdutoRepo } from "../repositories/produtoRepository";
import { Produto } from "../entities/produto";

export class ProdutoController {
    async render(req: Request, res: Response){
        if(req.session.cpf){
            let prodRepo: ProdutoRepo = new ProdutoRepo();
            prodRepo.getAllProdutos().then((result: any) => {
                res.render('home', {produtos: result})
            });
        }
        else{
            res.redirect('/')
        }
    };
    
    async save(req: Request, res: Response){
        let prodRepo: ProdutoRepo = new ProdutoRepo();
    
        let prod:Produto = new Produto();
        prod.nome = req.body.nome;
        prod.preco = req.body.preco;
        prod.quantidade = req.body.quantidade;
        prod.tipo = req.body.tipo;
    
        prodRepo.saveProduto(prod).then((result: any) => {
            console.log("Result : " + result);
            res.send(result);
        });
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