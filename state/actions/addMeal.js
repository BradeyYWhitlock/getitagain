import * as Constants from '../constants/addMeal'

export function setName(name) {
    return { type: Constants.SET_NAME, name };
}

export function setIngredients(ingredients) {
    return { type: Constants.SET_INGREDIENTS, ingredients };
}

export function setInstructions(instructions) {
    return { type: Constants.SET_INSTRUCTIONS, instructions };
}

export function clearMealData() {
    return { type: Constants.CLEAR_MEAL_DATA };
}