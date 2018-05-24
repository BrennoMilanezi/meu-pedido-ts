import {Entity, Column,  PrimaryGeneratedColumn} from "typeorm";

@Entity("cartao")
export class cartao {

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
}
