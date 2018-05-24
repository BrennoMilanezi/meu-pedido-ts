import {Entity, Column,  PrimaryGeneratedColumn, OneToOne} from "typeorm";
import {Usuario} from './usuario'

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

}
