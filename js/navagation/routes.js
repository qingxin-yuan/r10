import { createRouter } from "@expo/ex-navigation";

import About from "../scenes/About";
import Faves from '../scenes/Faves/';
import NavigationLayout from'./NavigationLayout';
import Schedule from '../scenes/Schedule/';

export const Router = createRouter(() => ({
  about: () => About,
  faves: () => Faves,
  layout: () => NavigationLayout,
  schedule: () => Schedule,
}));
