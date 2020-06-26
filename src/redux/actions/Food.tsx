import { ADD_FOOD, DELETE_FOOD } from './Types';

export const addFood = (food: String) => (
    {
        type: ADD_FOOD,
        data: food
    }
)

export const deleteFood = (key: Number) => (
    {
        type: DELETE_FOOD,
        key: key
    }
)

export interface FoodAction {
    key: Number
    data: String
    type: String
}