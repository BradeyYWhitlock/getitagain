import {SET_LIST_ITEMS} from '../constants/grocerylist'

export function setListItems(list) {
    return {type: SET_LIST_ITEMS, list};
}