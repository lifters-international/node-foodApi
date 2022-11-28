import { fetchGraphQl } from "./utils";
import { isApiKeyValid, getAllFood, searchFoodByName, getFoodByCategory, getFoodById } from "./queries";
import { FoodApiError, Food, FoodCategories } from "./types";

export class FoodApi {
    api_key: string;
    api_key_valid: boolean = false;

    constructor( api_key: string ) {
        this.api_key = api_key;

        this.verifyApiKey(true);
    }

    async verifyApiKey( throwError: boolean = false ) {
        let result = await fetchGraphQl(isApiKeyValid, { apiKey: this.api_key });

        if ( result.errors ) {
            throw new Error( result.errors[0].message );
        }

        this.api_key_valid = result.data.isFoodApiKeyValid;

        if ( !this.api_key_valid && throwError == true ) {
            throw new FoodApiError( "Invalid API key" );
        }
    }

    async getAllFood(limit?: number): Promise<Food[]> {
        let result = await fetchGraphQl(getAllFood, { apiKey: this.api_key, limit });

        if ( result.errors ) {
            throw new FoodApiError( result.errors[0].message );
        }

        return result.data.foodApiGetAllFood as Food[];
    }

    async searchFoodByName(name: string, limit?: number): Promise<Food[]> {
        let result = await fetchGraphQl(searchFoodByName, { apiKey: this.api_key, name, limit });

        if ( result.errors ) {
            throw new FoodApiError( result.errors[0].message );
        }

        return result.data.foodApiSearchFoodByName as Food[];
    }

    async getFoodByCategory(categories: FoodCategories, limit?: number): Promise<Food[]> {
        let result = await fetchGraphQl(getFoodByCategory, { apiKey: this.api_key, categories, limit });

        if ( result.errors ) {
            throw new FoodApiError( result.errors[0].message );
        }

        return result.data.foodApiSearchFoodByCategory as Food[];

    }

    async getFoodById(id: string): Promise<Food> {
        let result = await fetchGraphQl(getFoodById, { apiKey: this.api_key, id });

        if ( result.errors ) {
            throw new FoodApiError( result.errors[0].message );
        }

        return result.data.foodApiGetFoodById as Food;
    }
    
}
