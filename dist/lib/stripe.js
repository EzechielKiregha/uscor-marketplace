"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stripe = void 0;
var stripe_1 = __importDefault(require("stripe"));
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, '../.env'),
});
exports.stripe = new stripe_1.default(
// process.env.STRIPE_SECRET_KEY ?? 
'sk_test_51PXD9yKDaCiPTckxe8CRKCZqI5zE557CB3oqLoayL7lmfrBEGf2f8j2Rk4c8aW9KwdX1WgHHCMEPiT2LmnZs01Ou00ZDrHwOwy', {
    apiVersion: "2024-09-30.acacia",
    typescript: true,
});
