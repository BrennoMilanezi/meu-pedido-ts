import {Entity, Column,  PrimaryGeneratedColumn} from "typeorm";

@Entity("produto")
export class Produto {

    @PrimaryGeneratedColumn()
    produtoId: number;

    @Column()
    nome: string;
    
    @Column()
    preco: number;

    @Column()
    quantidade: number;

   @Column()
    tipo: number;
}
