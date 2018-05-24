import {Entity, Column,  PrimaryGeneratedColumn} from "typeorm";

@Entity("combo")
export class combo {

    @PrimaryGeneratedColumn()
    comboId: number;

    @Column()
    nome: string;
    
    @Column()
    preco: number;
    
}
