import { Request, Response } from "express";
import { UsuarioRepo } from "../repositories/usuarioRepository";
import { ClienteRepo } from "../repositories/clienteRepository";
import { Usuario } from "../entities/usuario";
import { Cliente } from "../entities/cliente";

export let render = async (req: Request, res: Response) => {
    res.render('index', {title: 'Meu Pedido', error: null})
}

export let login = async (req: Request, res: Response) => {
    //RETORNA TODOS OS USUARIOS CADSTRADOS NO BANCO
    let userRepo: UsuarioRepo = new UsuarioRepo();
    let login = req.body.login
    let senha = req.body.senha
    let finded = 0
    
    userRepo.getAll().then((result: any) => {
        result.forEach((usr: Usuario) => {
            console.log(usr)
            /*
            if(login === usr.email && senha === usr.senha && usr.status == 1){
                finded = 1
                req.session.nome = usr.nome
                req.session.cpf = usr.cpf
                //req.session.cliente = usr.clienteClienteId;
                if(usr.tipo == 1){
                    res.redirect('/home');
                }else{
                    res.redirect('/funcionario/home');
                }
            }*/
        })
        if(!finded){
            res.render('index', {title: 'Meu Pedido', error: 'Login nao realizado'})
        }
    });
};