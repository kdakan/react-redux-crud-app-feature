import { combineReducers } from "redux";
import { courseList } from "./course/list/reducers";
import { authorList } from "./author/list/reducers";
import { course } from "./course/reducers";
import { author, authorCourses } from "./author/reducers";
import { error } from "./shared/error/reducers";
import { alerts } from "./shared/alert/reducers";

const rootReducer = combineReducers({
  courseList,
  authorList,
  course,
  author,
  authorCourses,
  error,
  alerts
});

export default rootReducer;
