import { Request, Response } from "express";
import { UsuarioRepo } from "../repositories/usuarioRepository";
import { ClienteRepo } from "../repositories/clienteRepository";
import { Usuario } from "../entities/usuario";
import { Cliente } from "../entities/cliente";

export let render = async (req: Request, res: Response) => {
    res.render('index', {title: 'Meu Pedido', error: null})
}

export let getAll = async (req: Request, res: Response) => {
    //RETORNA TODOS OS USUARIOS CADSTRADOS NO BANCO
    let userRepo: UsuarioRepo = new UsuarioRepo();

    console.log("Received getAll ==> GET");

    userRepo.getAll().then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });


};

export let save = async (req: Request, res: Response) => {
    let userRepo: UsuarioRepo = new UsuarioRepo();
    let clienteRepo: ClienteRepo = new ClienteRepo();

    //RECEBE OS DADOS DO FORM
    console.log("Received save ==> POST");
    console.log(req.body);
    
    //CRIA UM NOVO CLIENTE/USUARIO
    let cliente:Cliente = new Cliente();
    cliente.telefone = req.body.telefone;
    cliente.nascimento = req.body.nascimento;
    

    let usr:Usuario = new Usuario();
    usr.nome = req.body.nome;
    usr.cpf = req.body.cpf;
    usr.email = req.body.email;
    usr.senha = req.body.senha;
    usr.tipo = req.body.tipo;
    usr.status = req.body.status;
    usr.cliente = cliente;
    
    //COMUNICA COM O REPOSITORY PARA SALVAR NO BANCO
    clienteRepo.saveAny(cliente).then((result: any) => {
        res.send(result);
    })

    userRepo.saveAny(usr).then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};
