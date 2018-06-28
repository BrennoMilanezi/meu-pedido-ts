import { NewState } from './newSetupState'
import { EditState } from './editSetupState'
import { JanStates } from './janStatesInterface';
import { Request, Response } from "express";

export class JanDados {
    private signin: NewState;
    private edit: EditState;
    private currentState: JanStates;
    
    constructor(){
        
        this.signin = new NewState(this);
        this.edit = new EditState(this);
        this.signin.setNextState(this.edit);
        this.edit.setNextState(this.signin);
        this.setState(this.signin);
    }
    
    setState(state: JanStates){
        this.currentState = state;
    }
    
    render(req: Request, res: Response){
        this.currentState.render(req, res);
        
    }
    
    save(req: Request, res:Response){
        this.currentState.save(req, res);
    }
    
    changeDataState(){
        this.setState(this.currentState.getNextState());
    }
    
}