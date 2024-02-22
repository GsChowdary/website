"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonController = void 0;
const PersonService_1 = require("../service/PersonService");
// import { IPerson } from '../typedef/person.def';
class PersonController {
    constructor() {
        this.svc = new PersonService_1.PersonService();
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const persons = yield this.svc.get();
                res.json({ data: persons, status: 'success' });
            }
            catch (e) {
                //@ts-ignore
                res.status(500).json({ error: e.message });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const persons = yield this.svc.getOne(req.params.id);
                res.json({ data: persons, status: 'success' });
            }
            catch (e) {
                //@ts-ignore
                res.status(500).json({ error: e.message });
            }
        });
    }
    put(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.svc.put(req.params.id, req.body);
                const persons = yield this.svc.getOne(req.params.id);
                res.json({ data: persons, status: 'success' });
            }
            catch (e) {
                //@ts-ignore
                res.status(500).json({ error: e.message });
            }
        });
    }
    post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const persons = yield this.svc.post(req.body);
                res.json({ data: persons, status: 'success' });
            }
            catch (e) {
                //@ts-ignore
                res.status(500).json({ error: e.message });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.svc.delete(req.params.id);
                res.json({ status: 'success' });
            }
            catch (e) {
                //@ts-ignore
                res.status(500).json({ error: e.message });
            }
        });
    }
}
exports.PersonController = PersonController;
