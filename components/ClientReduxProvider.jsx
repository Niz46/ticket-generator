"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store/store";
import NavigationTracker from "./NavigationTracker";

export function ClientReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationTracker />
        {children}
      </PersistGate>
    </Provider>
  );
}
