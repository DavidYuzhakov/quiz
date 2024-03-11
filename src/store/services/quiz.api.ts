import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IQuestions } from "../../App";

export const quizApi = createApi({
  reducerPath: 'quizApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://a4d8296abac85262.mokky.dev'
  }),
  endpoints: builder => ({
    getQuestions: builder.query<IQuestions[], void>({
      query: () => '/quiz'
    })
  })
})

export const { useGetQuestionsQuery } = quizApi