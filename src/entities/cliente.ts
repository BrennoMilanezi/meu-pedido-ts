import {Entity, Column,  PrimaryGeneratedColumn, OneToOne, ManyToMany, JoinTable, OneToMany} from "typeorm";
import {Usuario} from './usuario'
import {Cartao} from './cartao'
import {Compra} from './compra'

@Entity("cliente")
export class Cliente {

    @PrimaryGeneratedColumn()
    clienteId: number;

    @Column()
    telefone: string;
    
    @Column()
    nascimento: string;
    
    @OneToOne(type => Usuario, usr => usr.cliente)
    usr: Cliente
    
    @ManyToMany(type => Cartao)
    @JoinTable()
    cartoes: Cartao[]
    
    @OneToMany(type => Compra, compra => compra.cliente)
    compras: Compra[]
}
