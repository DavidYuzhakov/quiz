import { createSlice } from "@reduxjs/toolkit";

type QuizState = {
  correct: number,
  step: number
}

const initialState: QuizState = {
  correct: 0,
  step: 0
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    incStep: (state) => {
      state.step += 1
    },
    incCorrect: (state) => {
      state.correct += 1
    }
  }
})

export const { incCorrect, incStep } = quizSlice.actions
export default quizSlice.reducer