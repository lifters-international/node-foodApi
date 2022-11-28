"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFoodById = void 0;
exports.getFoodById = `
    query foodApiSearchFoodByCategory($apiKey: String!, $id: String!) {
        foodApiGetFoodById(api_key: $apiKey, id: $id) {
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
