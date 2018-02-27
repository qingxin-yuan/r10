import { combineReducers } from "redux";
import { NavigationReducer } from "@expo/ex-navigation";

const rootReducer = combineReducers({
  navigation: NavigationReducer
  // other reducers
});

export default rootReducer;
