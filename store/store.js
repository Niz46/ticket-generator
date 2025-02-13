import { configureStore, combineReducers } from "@reduxjs/toolkit";
import ticketReducer from "./slices/ticketSlice";
import navigationReducer from "./slices/navigationSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const createNoopStorage = () => {
  return {
    getItem: (_key) => Promise.resolve(null),
    setItem: (_key, value) => Promise.resolve(value),
    removeItem: (_key) => Promise.resolve(),
  };
};

let storage;
if (typeof window !== "undefined") {
  storage = require("redux-persist-indexeddb-storage").default("myDB");
} else {
  storage = createNoopStorage();
}

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  ticket: ticketReducer,
  navigation: navigationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
