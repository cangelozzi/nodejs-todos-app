"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//! this class builds the application structure including server setups
class Application {
    // initialize express
    constructor() {
        this.app = express_1.default();
    }
    // start server at port 3000
    start() {
        this.app.listen('3000', () => {
            console.log('Server is running at https://localhost:3000');
        });
    }
}
exports.default = Application;
