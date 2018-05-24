import { Produto } from "../entities/produto";
import { getManager } from "typeorm";

export class ProdutoRepo {

    getAllProdutos() {
        return getManager().getRepository(Produto).find();
    }

    saveProduto(produto: Produto) { 
          return getManager().getRepository(Produto).save(produto);
    }

}
