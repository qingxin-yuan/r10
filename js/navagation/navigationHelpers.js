import { NavigationActions } from "@expo/ex-navigation";
import Store from "../redux/store";
import { Router } from "./routes";

export const goToSession = (currentNavigatorUID, sessionData) => {
  Store.dispatch(
    NavigationActions.push(
      currentNavigatorUID,
      Router.getRoute("session", { sessionData: sessionData })
    )
  );
};

export const goToSpeaker = speakerData => {
  Store.dispatch(
    NavigationActions.push("root", Router.getRoute("speaker"
    , { speakerData }
  ))
  );
};

export const exitSpeaker = () => {
  Store.dispatch(
    NavigationActions.pop("root")
  );
};