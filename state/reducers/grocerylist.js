import { SET_LIST_ITEMS, SET_MEALS } from '../constants/grocerylist';

const INITIAL_STATE = {
  list: [],
  meals: []
};

export default function grocerylist(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LIST_ITEMS:
      return Object.assign({}, state, {
        list: action.list,
      });
    case SET_MEALS:
      return Object.assign({}, state, {
        meals: action.meals,
      });
    default:
      return state
  }
};