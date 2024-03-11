import { IQuestions } from "../App";
import { useAppDispatch } from "../hooks";
import { incCorrect, incStep } from "../store/quizSlice";


interface GameProps {
  data: IQuestions,
  percentage: string
}

export default function Game ({ data,  percentage }: GameProps) {
  const dispatch = useAppDispatch()

  function clickHandler (selected: string) {
    dispatch(incStep())
    if (selected === data.answer) {
      dispatch(incCorrect())
    }
  }

  return (
    <>
      <div className="progress">
        <div style={{ width: percentage }} className="progress__inner"></div>
      </div>
      <h1>{ data.question }</h1>
      <ul>
        {data.options.map(option => 
        <li 
          key={option}
          onClick={() => clickHandler(option)}
        >{ option }</li>)}
      </ul>
    </>
  )
}