import { Request, Response } from "express";

export let render = async (req: Request, res: Response) => {
    res.render('profile')
}