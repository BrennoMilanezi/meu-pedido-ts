import { Request, Response } from "express";

export interface ClienteDAO<T> {
    saveAny(obj: T ): void;
    getAll(): Promise<T[]>;
    getCartao(cartao: number): Promise<T[]>;
}