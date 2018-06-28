"use strict";
exports.__esModule = true;
var newSetupState_1 = require("./newSetupState");
var editSetupState_1 = require("./editSetupState");
var JanDados = /** @class */ (function () {
    function JanDados() {
        this.signin = new newSetupState_1.NewState(this);
        this.edit = new editSetupState_1.EditState(this);
        this.signin.setNextState(this.edit);
        this.edit.setNextState(this.signin);
        this.setState(this.signin);
    }
    JanDados.prototype.setState = function (state) {
        this.currentState = state;
    };
    JanDados.prototype.render = function (req, res) {
        this.currentState.render(req, res);
    };
    JanDados.prototype.save = function (req, res) {
        this.currentState.save(req, res);
    };
    JanDados.prototype.changeDataState = function () {
        this.setState(this.currentState.getNextState());
    };
    return JanDados;
}());
exports.JanDados = JanDados;
