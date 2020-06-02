import { combineReducers } from 'redux';
import grocerylist from './grocerylist';
import addMeal from './addMeal';

export default combineReducers({
  grocerylist,
  addMeal
});