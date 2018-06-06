import {Entity, Column,  PrimaryGeneratedColumn} from "typeorm";
import {Usuario} from './usuario'

@Entity("item_compra")
export class Funcionario {

    @PrimaryGeneratedColumn()
    id_item: number;

    @Column()
    qnt: number;
    
    @Column()
    id_compra: number;
    
    @Column()
    id_produto: number;

}
