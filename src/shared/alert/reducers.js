import actionTypes from "./actionTypes";

export function alerts(state = [], action) {
  switch (action.type) {
    case actionTypes.ADD_ALERT:
      return [...state, action.alert];
    case actionTypes.REMOVE_ALERT:
      const idx = state.indexOf(action.alert);
      if (idx >= 0) {
        const newState = [...state.slice(0, idx), ...state.slice(idx + 1)];
        return newState;
      } else return state;
    default:
      return state;
  }
}
