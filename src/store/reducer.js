import {combineReducers} from "redux-immutable";
import { reducer as userReducer } from "../pages/user/store";
import { reducer as authReducer } from "../components/authRoute/store";
import { reducer as chatReducer } from "../components/chat/store";
import { reducer as infoReducer } from "../pages/userInfo/store";
import { reducer as bossReducer } from "../pages/boss/store";
import { reducer as geniusReducer } from "../pages/genius/store";
import { reducer as meReducer } from "../pages/me/store";

export default combineReducers({
  user: userReducer,
  auth: authReducer,
  info: infoReducer,
  boss: bossReducer,
  genius: geniusReducer,
  me: meReducer,
  chat: chatReducer
})