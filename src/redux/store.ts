import { configureStore } from "@reduxjs/toolkit";
import uiReducer from './slice'


export const store = configureStore({
  reducer: {
    ui: uiReducer,
  }
});

// optional: export types (if using TS) or the store for debugging
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
