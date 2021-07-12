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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var typeorm_1 = require("typeorm");
var ProductDBRepositories_1 = require("../database/repositories/ProductDBRepositories");
var microServices_1 = require("../microServices");
exports.router = express_1.Router();
exports.router.get("/", function (req, res) {
    res.status(200).json({
        message: "Servidor Online"
    });
});
exports.router.post("/addToProductDB", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, tipo, produto, valor, productDBRepositories, productDB;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, tipo = _a.tipo, produto = _a.produto, valor = _a.valor;
                productDBRepositories = typeorm_1.getCustomRepository(ProductDBRepositories_1.ProductDBRepositories);
                productDB = productDBRepositories.create({
                    tipo: tipo,
                    produto: produto,
                    valor: valor
                });
                return [4 /*yield*/, productDBRepositories.save(productDB)];
            case 1:
                _b.sent();
                res.status(201).json(productDB);
                return [2 /*return*/];
        }
    });
}); });
exports.router.get("/database", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var productDBRepositories, all;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                productDBRepositories = typeorm_1.getCustomRepository(ProductDBRepositories_1.ProductDBRepositories);
                return [4 /*yield*/, productDBRepositories.find()];
            case 1:
                all = _a.sent();
                res.send(all);
                return [2 /*return*/];
        }
    });
}); });
//aplicando os microservices:
exports.router.get("/pesquisa", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, tipo, valor, microServices;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, tipo = _a.tipo, valor = _a.valor;
                return [4 /*yield*/, microServices_1.MicroServices(tipo, valor)];
            case 1:
                microServices = _b.sent();
                res.json(microServices);
                return [2 /*return*/];
        }
    });
}); });
