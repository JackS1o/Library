"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const booksController_1 = __importDefault(require("../controllers/booksController"));
const booksModel_1 = __importDefault(require("../models/booksModel"));
const booksService_1 = __importDefault(require("../services/booksService"));
const router = (0, express_1.Router)();
const booksModel = new booksModel_1.default();
const booksService = new booksService_1.default(booksModel);
const booksController = new booksController_1.default(booksService);
router.post("/", (req, res) => booksController.create(req, res));
router.get("/", (req, res) => booksController.read(req, res));
exports.default = router;
