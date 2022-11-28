"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllFood = void 0;
exports.getAllFood = `
    query FoodApiGetAllFood($apiKey: String!, $limit: Float) {
        foodApiGetAllFood(api_key: $apiKey, limit: $limit) {
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
