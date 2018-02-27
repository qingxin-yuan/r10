import { combineReducers } from "redux";
import { NavigationReducer } from "@expo/ex-navigation";

import aboutReducer from './modules/about';

const rootReducer = combineReducers({
  
  navigation: NavigationReducer,
  about: aboutReducer,
});

export default rootReducer;
