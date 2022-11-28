import { Food, FoodCategories } from "./types";
export declare class FoodApi {
    api_key: string;
    api_key_valid: boolean;
    constructor(api_key: string);
    verifyApiKey(throwError?: boolean): Promise<void>;
    getAllFood(limit?: number): Promise<Food[]>;
    searchFoodByName(name: string, limit?: number): Promise<Food[]>;
    getFoodByCategory(categories: FoodCategories, limit?: number): Promise<Food[]>;
    getFoodById(id: string): Promise<Food>;
}
