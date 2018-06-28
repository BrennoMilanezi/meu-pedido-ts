import { Request, Response } from "express";
import { JanStates } from './janStatesInterface';
import { JanDados } from './janDados';

import { UsuarioRepo } from "../../repositories/usuarioRepository";
import { ClienteRepo } from "../../repositories/clienteRepository";
import { Usuario } from "../../entities/usuario";
import { Cliente } from "../../entities/cliente";

export class EditState implements JanStates{
    
    private jan: JanDados;
    private nextState: JanStates;
    private userRepo: UsuarioRepo;
    private clienteRepo: ClienteRepo;
    
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
    
    async render(req: Request, res: Response) {
        if(req.session.cpf){
            this.userRepo.getByCpf(req.session.cpf).then((result) => {
                res.render('signin', {title: 'Editar dados', user: result[0]})
            })
        }
        else{
            res.redirect('/');
        }
    }
    
    async save(req: Request, res: Response){
        //RECEBE OS DADOS DO FORM
        
        //CRIA UM NOVO CLIENTE/USUARIO
    this.userRepo.getByCpf(req.session.cpf).then((usr) => {
        let cliente:Cliente = usr[0].cliente
        cliente.telefone = req.body.telefone;
        cliente.nascimento = req.body.data_nascimento;
        usr[0].nome = req.body.nome;
        usr[0].cpf = req.body.cpf;
        usr[0].email = req.body.email;
        usr[0].senha = req.body.senha;
        usr[0].cliente = cliente;
        //COMUNICA COM O REPOSITORY PARA SALVAR NO BANCO
        this.clienteRepo.saveAny(cliente);
        this.userRepo.saveAny(usr[0]);
        res.redirect('/cadastrar');
    })
    
    }
}