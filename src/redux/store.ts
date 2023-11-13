import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./features/auth/authSlice";
import uiStateSlice from "./features/uiState/uiStateSlice";
import { rootApi } from "./services/rootApi";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    uiState: uiStateSlice,
    [rootApi.reducerPath]: rootApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(rootApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
