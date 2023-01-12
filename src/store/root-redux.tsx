import { combineReducers } from "redux";
import UserReducer from "../redux/userRedux/reducer";

const reducers = combineReducers({
  user: UserReducer,
});

export default reducers;
