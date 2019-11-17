import actionTypes from "./actionTypes";

export function addAlert(alertType, message) {
  return function(dispatch, getState) {
    const alert = {
      id: new Date().getTime(),
      type: alertType,
      headline: "",
      message: message
    };
    dispatch({ type: actionTypes.ADD_ALERT, alert: alert });
  };
}

export function removeAlert(alert) {
  return function(dispatch, getState) {
    dispatch({ type: actionTypes.REMOVE_ALERT, alert: alert });
  };
}
