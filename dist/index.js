"use strict";
// Here we are going to execute the class in app.js
//TODO make sure to compile Typescript with npx tsc, after run node dist/index.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
// instanciate new object from class
const app = new app_1.default();
// start app @ port 3000
app.start();
