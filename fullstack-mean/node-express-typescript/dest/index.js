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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const PersonController_1 = require("./controller/PersonController");
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
//For env File 
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const port = process.env.PORT || 8000;
const personCtr = new PersonController_1.PersonController();
app.get('/', (req, res) => {
    res.send('Welcome to Express & TypeScript Server');
});
app.get('/person', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield personCtr.get(req, res);
}));
app.get('/person/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield personCtr.getOne(req, res);
}));
app.post('/person', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield personCtr.post(req, res);
}));
app.put('/person/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield personCtr.put(req, res);
}));
app.delete('/person/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield personCtr.delete(req, res);
}));
app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
    mongoose_1.default.connect(process.env.MONGO_DB_HOST || '')
        .then(() => { console.log("DB connected!!"); })
        .catch((e) => { console.log("Unabnle to connect to DB", e); });
});
