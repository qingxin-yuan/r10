import { createRouter } from "@expo/ex-navigation";

import AboutContainer from "../scenes/About";
import FavesContainer from '../scenes/Faves/';
import NavigationLayout from'./NavigationLayout';

export const Router = createRouter(() => ({
  about: () => AboutContainer,
  faves: () => FavesContainer,
  layout: () => NavigationLayout
}));
