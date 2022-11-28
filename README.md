# Getting Started

> If you have not done so, please create an api account at the following: https://business.lifters.app/food-api


### Install the Node js Lifters FoodApi wrapper
```JS
  npm i @lifters-international/node-foodapi
```

### Once imported you can start using the wrapper like so
```JS
  const { FoodApi } = require("@lifters-international/node-foodapi");
  
  const foodApi = new FoodApi("{FOOD_API_TOKEN}");
```

### Functions & Uses:
```JS
  await foodApi.verifyApiKey( throwError: boolean = false ) // Checks if the api_key provided is valid. And throws error if it is not.
  
  await foodApi.getAllFood( limit?: number ) // Returns all food from Lifters Food Database, if a limit is given that limit on Food is returned.
  
  await foodApi.searchFoodByName( name: string, limit?: number ) // Returns list of food in database with similar name.
  
  await foodApi.getFoodByCategory( categories: FoodCategories, limit?: number ) // Returns list of food in database that meets one or all category.
  
  await foodApi.getFoodById( id : string ) // Returns food with the given id.
```

### Important Types:

> FoodCategories:

```TYPESCRIPT
  type FoodCategories = {
    calories?: number;
    totalFat?: number;
    saturatedFat?: number;
    transFat?: number;
    cholesterol?: number;
    sodium?: number;
    totalCarbohydrate?: number;
    dietaryFiber?: number;
    totalSugars?: number;
    addedSugars?: number;
    protein?: number;
    vitaminD?: number;
    calcium?: number;
    iron?: number;
    potassium?: number;
  }
```


> Food:

```TYPESCRIPT
export type Food = {
    id: string;

    name: string;

    calories: number;

    servingSize: NutritionFactsJson;

    nutritionFacts: NutritionFacts;

    adminCreated: boolean;
}
```
