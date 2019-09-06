"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// having TS we can also get Request and Response from express
const express_1 = require("express");
const router = express_1.Router();
//! Routes
router.get('/', (req, res) => {
    res.render('index');
});
exports.default = router;
