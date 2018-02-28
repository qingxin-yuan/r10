import { createRouter } from "@expo/ex-navigation";

import About from "../scenes/About";
import Faves from '../scenes/Faves/';
import NavigationLayout from'./NavigationLayout';
import Schedule from '../scenes/Schedule/';
import Session from '../scenes/Session';
import Speaker from '../scenes/Speaker/';

export const Router = createRouter(() => ({
  about: () => About,
  faves: () => Faves,
  layout: () => NavigationLayout,
  schedule: () => Schedule,
  session: () => Session,
  speaker: ()=> Speaker,
}));
