import actionTypes from "./actionTypes";

export function authorList(state = [], action) {
  switch (action.type) {
    case actionTypes.GET_AUTHOR_LIST:
    case actionTypes.SEARCH_AUTHOR_LIST:
      return action.authorList;
    case actionTypes.CLEAR_AUTHOR_LIST:
      return [];
    default:
      return state;
  }
}
