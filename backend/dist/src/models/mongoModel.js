"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MongoModel {
    constructor(model) {
        this.model = model;
    }
    async create(obj) {
        return this.model.create({ ...obj });
    }
    async read() {
        return this.model.find();
    }
}
exports.default = MongoModel;
