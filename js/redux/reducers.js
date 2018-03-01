import { combineReducers } from "redux";
import { NavigationReducer } from "@expo/ex-navigation";

import aboutReducer from './modules/about';
import eventReducer from './modules/event';
import favesReducer from './modules/faves';

const rootReducer = combineReducers({
  
  navigation: NavigationReducer,
  about: aboutReducer,
  event: eventReducer,
  faves: favesReducer,
});

export default rootReducer;
