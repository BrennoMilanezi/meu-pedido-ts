import { Produto } from "../entities/produto";
import { getManager } from "typeorm";
import { ProdutoDAO } from './DAO/produtoDAO'

export class ProdutoRepo implements ProdutoDAO<Produto>{
 saveAny(obj: Produto){
     getManager().getRepository(Produto).save(obj);
 }
 getAll(): Promise<Produto[]>{
     return getManager().getRepository(Produto).find();
 }
}
