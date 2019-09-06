"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const data_1 = __importDefault(require("../data"));
const router = express_1.Router();
//! Routes
// ---- CREATE
router
    .route('/create')
    .get((req, res) => {
    res.render('todos/create');
})
    .post((req, res) => {
    const body = req.body;
    data_1.default.push(body);
    body.id = new Date().getTime();
    res.redirect('/todos/list');
});
// ---- READ
router.route('/list').get((req, res) => {
    res.render('todos/list', { data: data_1.default });
});
// ---- DELETE
router.route('/delete/:id').get((req, res) => {
    const { id } = req.params;
    console.log(id);
    // get index of object with id:37
    let removeIndex = data_1.default.map(item => item.id).indexOf(Number(id));
    // remove object
    data_1.default.splice(removeIndex, 1);
    res.redirect('/todos/list');
});
// ---- EDIT
router
    .route('/edit/:id')
    .get((req, res) => {
    const { id } = req.params;
    const todoArray = data_1.default.filter(e => e.id.toString() === id);
    const todo = todoArray[0];
    res.render('todos/edit', { todo });
})
    .post((req, res) => {
    const { id } = req.params;
    const { title, desc } = req.body;
    data_1.default.forEach(todo => {
        if (todo.id === Number(id)) {
            todo.title = title;
            todo.desc = desc;
        }
    });
    res.redirect('/todos/list');
});
exports.default = router;
