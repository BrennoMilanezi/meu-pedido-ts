import {Entity, Column,  PrimaryGeneratedColumn, OneToOne} from "typeorm";
import {Usuario} from './usuario'

@Entity("funcionario")
export class Funcionario {

    @PrimaryGeneratedColumn()
    funcionarioId: number;

    @Column()
    cargo: string;
    
    @Column()
    salario: number;

    @OneToOne(type => Usuario, usr => usr.funcionario)
    usr: Funcionario
}
