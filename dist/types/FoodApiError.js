"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodApiError = void 0;
class FoodApiError extends Error {
    constructor(message, name = "FoodApiError") {
        super(message);
        this.name = name;
    }
}
exports.FoodApiError = FoodApiError;
