import actionTypes from "./actionTypes";

export function author(state = {}, action) {
  switch (action.type) {
    case actionTypes.GET_AUTHOR:
    case actionTypes.SAVE_AUTHOR:
    case actionTypes.DELETE_AUTHOR:
    case actionTypes.CHANGE_AUTHOR:
      return action.author;
    case actionTypes.CLEAR_AUTHOR:
      return {};
    default:
      return state;
  }
}

export function authorCourses(state = [], action) {
  switch (action.type) {
    case actionTypes.GET_AUTHOR_COURSES:
      return action.authorCourses;
    case actionTypes.CLEAR_AUTHOR_COURSES:
      return [];
    default:
      return state;
  }
}
