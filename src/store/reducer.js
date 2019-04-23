import {combineReducers} from "redux-immutable";
import { reducer as userReducer } from "../pages/user/store";
import { reducer as authReducer } from "../components/authRoute/store";

export default combineReducers({
  user: userReducer,
  auth: authReducer
})