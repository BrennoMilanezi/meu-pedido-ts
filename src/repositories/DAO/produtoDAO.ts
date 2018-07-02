import { Request, Response } from "express";

export interface ProdutoDAO<T> {
    saveAny(obj: T ): void;
    getAll(): Promise<T[]>;
}