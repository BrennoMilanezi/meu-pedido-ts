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

    userRepo.getAll().then((result: any) => {
        console.log("Result : " + result);
        res.send(result);
    });
};