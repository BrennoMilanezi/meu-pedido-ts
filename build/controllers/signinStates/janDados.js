"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const newSetupState_1 = require("./newSetupState");
const editSetupState_1 = require("./editSetupState");
class JanDados {
    constructor() {
        this.signin = new newSetupState_1.NewState(this);
        this.edit = new editSetupState_1.EditState(this);
        this.signin.setNextState(this.edit);
        this.edit.setNextState(this.signin);
        this.setState(this.signin);
    }
    setState(state) {
        this.currentState = state;
    }
    render(req, res) {
        this.currentState.render(req, res);
    }
    save(req, res) {
        this.currentState.save(req, res);
    }
    changeDataState() {
        this.setState(this.currentState.getNextState());
    }
}
exports.JanDados = JanDados;
//# sourceMappingURL=janDados.js.map