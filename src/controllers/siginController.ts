import { Request, Response } from "express";
import { UsuarioRepo } from "../repositories/usuarioRepository";
import { ClienteRepo } from "../repositories/clienteRepository";
import { Usuario } from "../entities/usuario";
import { Cliente } from "../entities/cliente";

export let render = async (req: Request, res: Response) => {
    res.render('signin')
}

export let save = async (req: Request, res: Response) => {
    let userRepo: UsuarioRepo = new UsuarioRepo();
    let clienteRepo: ClienteRepo = new ClienteRepo();

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
    await clienteRepo.saveAny(cliente)
    await userRepo.saveAny(usr)
    res.redirect('/')
};
