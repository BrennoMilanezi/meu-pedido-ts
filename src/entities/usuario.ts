import {Entity, Column,  PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import {Cliente} from './cliente'
import {Funcionario} from './funcionario'

@Entity("usuario")
export class Usuario {

    @PrimaryGeneratedColumn()
    usuarioId: number;

    @Column()
    nome: string;
    
    @Column()
    cpf: string;

    @Column()
    email: string;

    @Column()
    senha: string;
    
    @Column()
    tipo: number;
    
    @Column()
    status: number;
    
    @OneToOne(type => Cliente)
    @JoinColumn()
    cliente: Cliente
    
    @OneToOne(type => Funcionario)
    @JoinColumn()
    funcionario: Funcionario
    
}
