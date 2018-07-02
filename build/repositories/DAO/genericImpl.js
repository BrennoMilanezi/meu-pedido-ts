"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class GenericImpl {
    saveAny(obj) {
        typeorm_1.getManager().getRepository(T).save(obj);
    }
    getAll() {
        return typeorm_1.getManager().getRepository(T).find();
    }
}
exports.GenericImpl = GenericImpl;
//# sourceMappingURL=genericImpl.js.map