import actionTypes from "./actionTypes";
import errorActionTypes from "../../shared/error/actionTypes";
import * as api from "./api";

export function getCourseList() {
  return function(dispatch, getState) {
    dispatch({ type: errorActionTypes.CLEAR_API_ERROR });
    dispatch({ type: actionTypes.CLEAR_COURSE_LIST });

    api
      .getCourseList()
      .then(courseList =>
        dispatch({ type: actionTypes.GET_COURSE_LIST, courseList: courseList })
      )
      .catch(error =>
        dispatch({ type: errorActionTypes.SET_API_ERROR, error: error })
      );
  };
}

export function searchCourseList(searchTerm) {
  return function(dispatch, getState) {
    dispatch({ type: errorActionTypes.CLEAR_API_ERROR });
    dispatch({ type: actionTypes.CLEAR_COURSE_LIST });

    api
      .searchCourseList(searchTerm)
      .then(courseList =>
        dispatch({ type: actionTypes.SEARCH_COURSE_LIST, courseList: courseList })
      )
      .catch(error =>
        dispatch({ type: errorActionTypes.SET_API_ERROR, error: error })
      );
  };
}
