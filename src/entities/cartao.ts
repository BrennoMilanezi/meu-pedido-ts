import {Entity, Column,  PrimaryGeneratedColumn, OneToMany} from "typeorm";
import {Cliente} from './cliente'
import {Compra} from './compra'

@Entity("cartao")
export class Cartao {

    @PrimaryGeneratedColumn()
    cartaoId: number;

    @Column()
    titular: string;
    
    @Column()
    numero: number;

    @Column()
    cod_seguranca: number;

   @Column({
       type: "date"
   })
    vencimento: string;
    
    @OneToMany(type => Compra, compra => compra.cliente)
    compras: Compra[]
}
