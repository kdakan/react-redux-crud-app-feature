import actionTypes from "./actionTypes";
import errorActionTypes from "../shared/error/actionTypes";
import * as api from "./api";

export function changeAuthor(author) {
  return function(dispatch, getState) {
    dispatch({ type: actionTypes.CHANGE_AUTHOR, author: author });
  };
}

export function clearAuthor() {
  return function(dispatch, getState) {
    dispatch({ type: actionTypes.CLEAR_AUTHOR });
  };
}

export function deleteAuthor(author) {
  return function(dispatch, getState) {
    dispatch({ type: errorActionTypes.CLEAR_API_ERROR });
    dispatch({ type: actionTypes.CLEAR_AUTHOR });

    api
      .deleteAuthor(author)
      .then(author =>
        dispatch({ type: actionTypes.DELETE_AUTHOR, author: author })
      )
      .catch(error =>
        dispatch({ type: errorActionTypes.SET_API_ERROR, error: error })
      );
  };
}

export function getAuthor(id) {
  return function(dispatch, getState) {
    dispatch({ type: errorActionTypes.CLEAR_API_ERROR });
    dispatch({ type: actionTypes.CLEAR_AUTHOR });
    api
      .getAuthor(id)
      .then(author =>
        dispatch({ type: actionTypes.GET_AUTHOR, author: author })
      )
      .catch(error =>
        dispatch({ type: errorActionTypes.SET_API_ERROR, error: error })
      );
  };
}

export function getAuthorCourses(authorName) {
  return function(dispatch, getState) {
    dispatch({ type: errorActionTypes.CLEAR_API_ERROR });
    dispatch({ type: actionTypes.CLEAR_AUTHOR_COURSES });

    api
      .getAuthorCourses(authorName)
      .then(authorCourses =>
        dispatch({
          type: actionTypes.GET_AUTHOR_COURSES,
          authorCourses: authorCourses
        })
      )
      .catch(error =>
        dispatch({ type: errorActionTypes.SET_API_ERROR, error: error })
      );
  };
}

export default function saveAuthor(author) {
  return function(dispatch, getState) {
    dispatch({ type: errorActionTypes.CLEAR_API_ERROR });
    dispatch({ type: actionTypes.CLEAR_AUTHOR });

    api
      .saveAuthor(author)
      .then(author =>
        dispatch({ type: actionTypes.SAVE_AUTHOR, author: author })
      )
      .catch(error =>
        dispatch({ type: errorActionTypes.SET_API_ERROR, error: error })
      );
  };
}
