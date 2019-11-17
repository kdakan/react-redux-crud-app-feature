import actionTypes from "./actionTypes";
import errorActionTypes from "../shared/error/actionTypes";
import * as api from "./api";

export function changeCourse(course) {
  return function(dispatch, getState) {
    dispatch({ type: actionTypes.CHANGE_COURSE, course: course });
  };
}

export function clearCourse() {
  return function(dispatch, getState) {
    dispatch({ type: actionTypes.CLEAR_COURSE });
  };
}

export function deleteCourse(course) {
  return function(dispatch, getState) {
    dispatch({ type: errorActionTypes.CLEAR_API_ERROR });
    dispatch({ type: actionTypes.CLEAR_COURSE });

    api
      .deleteCourse(course)
      .then(course =>
        dispatch({ type: actionTypes.DELETE_COURSE, course: course })
      )
      .catch(error =>
        dispatch({ type: errorActionTypes.SET_API_ERROR, error: error })
      );
  };
}

export function getCourse(id) {
  return function(dispatch, getState) {
    dispatch({ type: errorActionTypes.CLEAR_API_ERROR });
    dispatch({ type: actionTypes.CLEAR_COURSE });
  
    api
      .getCourse(id)
      .then(course =>
        dispatch({ type: actionTypes.GET_COURSE, course: course })
        )
        .catch(error =>
          dispatch({ type: errorActionTypes.SET_API_ERROR, error: error })
        );
  };
}
  
export function saveCourse(course) {
    return function(dispatch, getState) {
      dispatch({ type: errorActionTypes.CLEAR_API_ERROR });
      dispatch({ type: actionTypes.CLEAR_COURSE });
  
      api
        .saveCourse(course)
        .then(course =>
          dispatch({ type: actionTypes.SAVE_COURSE, course: course })
        )
        .catch(error =>
          dispatch({ type: errorActionTypes.SET_API_ERROR, error: error })
        );
  };
}
