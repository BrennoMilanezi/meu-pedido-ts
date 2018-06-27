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
    
    userRepo.getOne(login, senha).then((result) => {
        //console.log(result)
        if(result.length == 1){
            req.session.nome = result[0].nome
            req.session.cpf = result[0].cpf
            req.session.cliente = result[0].cliente.clienteId;
            req.session.tipo = result[0].tipo
            
            if(req.session.tipo === 1){
                res.redirect('/home');
            }
            else{
                res.redirect('/funcionario/home');
            }
        }
        else{
            res.render('index', {title: 'Meu Pedido', error: 'Login nao realizado'})
        }
    })
    
};