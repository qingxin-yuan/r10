import { combineReducers } from "redux";
import { NavigationReducer } from "@expo/ex-navigation";

import aboutReducer from './modules/about';
import eventReducer from './modules/event';

const rootReducer = combineReducers({
  
  navigation: NavigationReducer,
  about: aboutReducer,
  event: eventReducer,
});

export default rootReducer;
