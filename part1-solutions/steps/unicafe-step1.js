import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const updateGood = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
  }

  const updateNeutral = () => {
    const updatedNeutral = neutral + 1 
    setNeutral(updatedNeutral)
  }

  const updateBad = () => {
    setBad(bad+1)
  }
  return (
    <div>
        <h1>
            give feedback
        </h1>
        <p>
            <button onClick = {updateGood}>Good</button>
            <button onClick = {updateNeutral}>Neutral</button>
            <button onClick = {updateBad}>Bad</button>
        </p>
            good {good}
            neutral {neutral}
            bad {bad}
    </div>
  )
}

export default App