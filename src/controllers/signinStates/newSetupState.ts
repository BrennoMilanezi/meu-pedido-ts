import { Request, Response } from "express";
import { JanStates } from './janStatesInterface';
import { JanDados } from './janDados';

import { UsuarioRepo } from "../../repositories/usuarioRepository";
import { ClienteRepo } from "../../repositories/clienteRepository";
import { ClienteDAO } from "../../repositories/DAO/clienteDAO";
import { UsuarioDAO } from "../../repositories/DAO/userDAO";
import { Usuario } from "../../entities/usuario";
import { Cliente } from "../../entities/cliente";

export class NewState implements JanStates{

    private jan: JanDados;
    private nextState: JanStates;
    private userRepo: UsuarioDAO<Usuario>;
    private clienteRepo: ClienteDAO<Cliente>;
    
    constructor(jan: JanDados){
        this.jan = jan;
        this.userRepo = new UsuarioRepo();
        this.clienteRepo = new ClienteRepo();
    }
    
    setNextState(nextState: JanStates){
        this.nextState = nextState;
    }
    
    getNextState(){
        return this.nextState;
    }
    
    async render(req: Request, res: Response){
        res.render('signin', {title: 'Cadastrar', user: ""});
    }
    
    async save(req: Request, res: Response){
        //RECEBE OS DADOS DO FORM
        
        //CRIA UM NOVO CLIENTE/USUARIO
        let cliente:Cliente = new Cliente();
        cliente.telefone = req.body.telefone;
        cliente.nascimento = req.body.data_nascimento;
        
    
        let usr:Usuario = new Usuario();
        usr.nome = req.body.nome;
        usr.cpf = req.body.cpf;
        usr.email = req.body.email;
        usr.senha = req.body.senha;
        usr.tipo = 1;
        usr.status = 1;
        usr.cliente = cliente;
        //COMUNICA COM O REPOSITORY PARA SALVAR NO BANCO
        //await this.clienteRepo.saveAny(cliente);
        //await this.userRepo.saveAny(usr);
        res.redirect('/');
    }
}
