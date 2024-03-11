import { configureStore } from "@reduxjs/toolkit";
import { quizApi } from "./services/quiz.api";
import quiz from "./quizSlice"

export const store = configureStore({
  reducer: {
    [quizApi.reducerPath]: quizApi.reducer,
    quiz,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(quizApi.middleware)
})

export type AppDispatch = typeof store.dispatch
export type RootType = ReturnType<typeof store.getState>