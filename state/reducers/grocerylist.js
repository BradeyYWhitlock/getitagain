import {SET_LIST_ITEMS} from '../constants/grocerylist';

const INITIAL_STATE = {
  list: []
};

export default function grocerylist(state = INITIAL_STATE, action){
  switch (action.type) {
    case SET_LIST_ITEMS:
      return Object.assign({}, state, {
        list: action.list,
      });
    default:
      return state
  }
};