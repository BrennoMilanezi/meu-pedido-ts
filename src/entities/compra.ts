import {Entity, Column,  PrimaryGeneratedColumn, ManyToOne} from "typeorm";
import {Cliente} from './cliente'
import {Cartao} from './cartao'
import {Produto} from './produto'

@Entity("compra")
export class Compra {

    @PrimaryGeneratedColumn()
    compraId: number;

    @Column({
        type: "date"
    })
    data: string;
    
    @Column({
        type: "text"
    })
    texto_avaliacao: string;

    @Column()
    nota_avaliacao: number;

    @ManyToOne(type => Cliente, cliente => cliente.compras)
    cliente: Cliente;
    
    @ManyToOne(type => Cartao, cartao => cartao.compras)
    cartao: Cartao;
}
