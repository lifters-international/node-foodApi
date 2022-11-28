"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodApi = void 0;
const utils_1 = require("./utils");
const queries_1 = require("./queries");
const types_1 = require("./types");
class FoodApi {
    constructor(api_key) {
        this.api_key_valid = false;
        this.api_key = api_key;
        this.verifyApiKey(true);
    }
    async verifyApiKey(throwError = false) {
        let result = await (0, utils_1.fetchGraphQl)(queries_1.isApiKeyValid, { apiKey: this.api_key });
        if (result.errors) {
            throw new Error(result.errors[0].message);
        }
        this.api_key_valid = result.data.isFoodApiKeyValid;
        if (!this.api_key_valid && throwError == true) {
            throw new types_1.FoodApiError("Invalid API key");
        }
    }
    async getAllFood(limit) {
        let result = await (0, utils_1.fetchGraphQl)(queries_1.getAllFood, { apiKey: this.api_key, limit });
        if (result.errors) {
            throw new types_1.FoodApiError(result.errors[0].message);
        }
        return result.data.foodApiGetAllFood;
    }
    async searchFoodByName(name, limit) {
        let result = await (0, utils_1.fetchGraphQl)(queries_1.searchFoodByName, { apiKey: this.api_key, name, limit });
        if (result.errors) {
            throw new types_1.FoodApiError(result.errors[0].message);
        }
        return result.data.foodApiSearchFoodByName;
    }
    async getFoodByCategory(categories, limit) {
        let result = await (0, utils_1.fetchGraphQl)(queries_1.getFoodByCategory, { apiKey: this.api_key, categories, limit });
        if (result.errors) {
            throw new types_1.FoodApiError(result.errors[0].message);
        }
        return result.data.foodApiSearchFoodByCategory;
    }
    async getFoodById(id) {
        let result = await (0, utils_1.fetchGraphQl)(queries_1.getFoodById, { apiKey: this.api_key, id });
        if (result.errors) {
            throw new types_1.FoodApiError(result.errors[0].message);
        }
        return result.data.foodApiGetFoodById;
    }
}
exports.FoodApi = FoodApi;
