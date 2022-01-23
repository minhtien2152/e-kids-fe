import React from "react";
import { Provider as PaperProvider } from "react-native-paper";

import { theme } from "./src/core/theme";
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from "./src/screens";
import { BottomBar } from "./src/components/Bottombar";
import { Provider } from "react-redux";
import store from "./store";
import Toast from "react-native-toast-message";

import Navigator from "./src/navigation/Navigator";
export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <Navigator />
      </PaperProvider>
      <Toast />
    </Provider>
  );
}
