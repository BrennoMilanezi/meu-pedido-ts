import { Request, Response } from "express";

export interface JanStates {
    save(req: Request, res: Response):void;
    render(req: Request, res: Response): void;
    setNextState(nextState: JanStates): void;
    getNextState(): JanStates;
    
}