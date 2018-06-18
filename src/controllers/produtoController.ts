import { Request, Response } from "express";
import { ProdutoRepo } from "../repositories/produtoRepository";
import { Produto } from "../entities/produto";

export let getAll = async (req: Request, res: Response) => {
    let prodRepo: ProdutoRepo = new ProdutoRepo();

    prodRepo.getAllProdutos().then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });


};

export let save = async (req: Request, res: Response) => {
    let prodRepo: ProdutoRepo = new ProdutoRepo();

    console.log("Received save ==> POST");
    console.log(req.body);

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
