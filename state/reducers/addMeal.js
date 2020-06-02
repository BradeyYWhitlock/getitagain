import * as Constants from '../constants/addMeal';

const INITIAL_STATE = {
    name: '',
    ingredients: [],
    instructions: ["Add"]
};

export default function addMeal(state = INITIAL_STATE, action = '') {
    switch (action.type) {
        case Constants.SET_NAME:
            return Object.assign({}, state, {
                name: action.name,
            });
        case Constants.SET_INGREDIENTS:
            return Object.assign({}, state, {
                ingredients: action.ingredients,
            });
        case Constants.SET_INSTRUCTIONS:
            return Object.assign({}, state, {
                instructions: action.instructions,
            });
        case Constants.CLEAR_MEAL_DATA:
            return Object.assign({}, state, {
                name: '',
                ingredients: [],
                instructions: ["Add"]
            });
        default:
            return state
    }
};