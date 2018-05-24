import {Entity, Column,  PrimaryGeneratedColumn} from "typeorm";

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

}
