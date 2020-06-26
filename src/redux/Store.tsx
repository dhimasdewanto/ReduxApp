import foodReducer from "./reducers/FoodReducer";

import { createStore, combineReducers } from 'redux'

const rootReducer = combineReducers({
    foods: foodReducer
})

const configureStore = () => createStore(rootReducer)

export default configureStore