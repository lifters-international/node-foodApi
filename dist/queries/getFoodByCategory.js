"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFoodByCategory = void 0;
exports.getFoodByCategory = `
    query foodApiSearchFoodByCategory($apiKey: String!, $categories: FoodApiNutrient!, $limit: Float) {
        foodApiSearchFoodByCategory(api_key: $apiKey, categories: $categories, limit: $limit) {
            adminCreated

            calories

            id

            name

            whoCreated

            servingSize {
                measurment
                unit
            }
            nutritionFacts {

                addedSugars {
                    measurment
                    unit
                }

                calcium {
                    measurment
                    unit
                }

                cholesterol {
                    measurment
                    unit
                }

                dietaryFiber {
                    measurment
                    unit
                }

                iron {
                    measurment
                    unit
                }

                potassium {
                    measurment
                    unit
                }

                protein {
                    measurment
                    unit
                }

                saturatedFat {
                    measurment
                    unit
                }

                sodium {
                    measurment
                    unit
                }

                totalCarbohydrate {
                    measurment
                    unit
                }

                totalFat {
                    measurment
                    unit
                }

                totalSugars {
                    measurment
                    unit
                }

                transFat {
                    measurment
                    unit
                }

                vitaminD {
                    measurment
                    unit
                }
            }
        }
    }
`;
