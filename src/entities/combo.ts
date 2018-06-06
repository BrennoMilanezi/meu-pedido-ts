import {Entity, Column,  PrimaryGeneratedColumn, ManyToMany, JoinTable} from "typeorm";
import {Produto} from './produto'

@Entity("combo")
export class combo {

    @PrimaryGeneratedColumn()
    comboId: number;

    @Column()
    nome: string;
    
    @Column()
    preco: number;
    
    @ManyToMany(type => Produto)
    @JoinTable()
    item: Produto[]
}
