import { createRouter } from "@expo/ex-navigation";

import AboutContainer from "../scenes/About";

export const Router = createRouter(() => ({
  about: () => AboutContainer
}));
