"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
exports.render = (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.render('feedback');
});
=======
class FeedBackContoller {
    render(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.session.cpf) {
                res.render('feedback');
            }
            else {
                res.redirect('/');
            }
        });
    }
}
exports.FeedBackContoller = FeedBackContoller;
>>>>>>> dev
//# sourceMappingURL=feedbackController.js.map