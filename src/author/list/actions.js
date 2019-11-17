import actionTypes from "./actionTypes";
import errorActionTypes from "../../shared/error/actionTypes";
import * as api from "./api";

export function getAuthorList() {
  return function(dispatch, getState) {
    dispatch({ type: errorActionTypes.CLEAR_API_ERROR });
    dispatch({ type: actionTypes.CLEAR_AUTHOR_LIST });
    api
      .getAuthorList()
      .then(authorList =>
        dispatch({ type: actionTypes.GET_AUTHOR_LIST, authorList: authorList })
      )
      .catch(error =>
        dispatch({ type: errorActionTypes.SET_API_ERROR, error: error })
      );
  };
}

export function searchAuthorList(searchTerm) {
    return function(dispatch, getState) {
      dispatch({ type: errorActionTypes.CLEAR_API_ERROR });
      dispatch({ type: actionTypes.CLEAR_AUTHOR_LIST });
  
      api
        .searchAuthorList(searchTerm)
        .then(authorList =>
          dispatch({ type: actionTypes.SEARCH_AUTHOR_LIST, authorList: authorList })
        )
        .catch(error =>
          dispatch({ type: errorActionTypes.SET_API_ERROR, error: error })
        );
    };
  }