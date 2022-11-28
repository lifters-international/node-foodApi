export class FoodApiError extends Error {
    constructor( message: string, name="FoodApiError" ) {
        super( message );
        this.name=name
    }
}