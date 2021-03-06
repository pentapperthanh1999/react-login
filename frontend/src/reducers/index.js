import { combineReducers } from "redux";
import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { users } from "./user.reducer";
import { tasks } from "./task.reducer";
import { alert } from "./alert.reducer";
const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  tasks,
  alert,
});

export default rootReducer;
