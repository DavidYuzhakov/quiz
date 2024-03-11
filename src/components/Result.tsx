interface ResultProps {
  correct: number
  length: number
}

export default function Result({ correct, length }: ResultProps) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt="result" />
      <h2>You have solved { correct } out of { length } answers</h2>
      <button onClick={() => window.location.reload()}>Try again</button>
    </div>
  )
}