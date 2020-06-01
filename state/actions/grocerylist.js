import * as Constants from '../constants/grocerylist'

export function setListItems(list) {
    return { type: Constants.SET_LIST_ITEMS, list };
}

export function setMeals(meals) {
    return { type: Constants.SET_MEALS, meals };
}