import {combineReducers} from "redux-immutable";
import { reducer as userReducer } from "../pages/user/store";

export default combineReducers({
  user: userReducer
})