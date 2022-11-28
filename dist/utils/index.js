"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchGraphQl = void 0;
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const urls_1 = require("./urls");
const fetchGraphQl = async (query, variables) => {
    const response = await (0, cross_fetch_1.default)((0, urls_1.getApiUrl)(), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            //"Accept": ""Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({ query, variables })
    });
    const data = await response.json();
    return data;
};
exports.fetchGraphQl = fetchGraphQl;
