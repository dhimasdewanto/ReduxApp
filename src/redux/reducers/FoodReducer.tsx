import { ADD_FOOD, DELETE_FOOD } from '../actions/Types';
import { FoodModel } from 'src/models/FoodModel';
import { FoodAction } from '../actions/Food';

const initialState = {
    foodList: Array<FoodModel>()
}

const foodReducer = (state = initialState, action: FoodAction) => {
    switch (action.type) {
        case ADD_FOOD:
            return {
                ...state,
                foodList: state.foodList.concat({
                    key: Math.random(),
                    name: action.data,
                })
            }
        case DELETE_FOOD:
            return {
                ...state,
                foodList: state.foodList.filter((item) => item.key !== action.key)
            }
        default:
            return state
    }
}

export default foodReducer