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
exports.courseService = void 0;
const schema_1 = __importDefault(require("../schema/schema"));
class courseService {
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield schema_1.default.find();
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield schema_1.default.findById(id);
        });
    }
    put(id, courses) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield schema_1.default.findByIdAndUpdate(id, courses);
        });
    }
    post(courses) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield schema_1.default.create(courses);
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield schema_1.default.findByIdAndDelete(id);
        });
    }
}
exports.courseService = courseService;
