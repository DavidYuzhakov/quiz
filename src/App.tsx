import Game from "./components/Game"
import Result from "./components/Result"
import { useGetQuestionsQuery } from "./store/services/quiz.api"
import { useAppSelector } from "./hooks"

export interface IQuestions {
  question: string
  options: string[]
  answer: string
}

function App() {
  const { step, correct } = useAppSelector(state => state.quiz)
  const { data, isLoading } = useGetQuestionsQuery()
  
  if (data) {
    const question = data[step]
    const percentage = `${Math.round(step / data.length * 100)}%`

      return (
        <div className="App">
        {step !== data.length 
          ? 
          <Game 
            data={question} 
            percentage={percentage}
          />
          :
          <Result correct={correct} length={data.length} />
        }
      </div>
    )
  }

  if (isLoading) return <div className="App"><p className="text-center">Loading...</p></div>
}

export default App
