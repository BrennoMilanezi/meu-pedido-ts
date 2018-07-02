import { Request, Response } from "express";

export interface UsuarioDAO<T> {
    saveAny(obj: T ): void;
    getAll(): Promise<T[]>;
    getOne(login: string, password: string): Promise<T[]>
    getByCpf(cpf: string): Promise<T[]>
}