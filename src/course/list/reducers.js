import actionTypes from "./actionTypes";

export function courseList(state = [], action) {
  switch (action.type) {
    case actionTypes.GET_COURSE_LIST:
    case actionTypes.SEARCH_COURSE_LIST:
      return action.courseList;
    case actionTypes.CLEAR_COURSE_LIST:
      return [];
    default:
      return state;
  }
}
