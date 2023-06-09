import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const [avg, setAvg] = useState(0)
    const [pos, setPos] = useState(0)

    const updateGood = () => {
        setAll(all + 1)
        setGood(good + 1)
        setAvg((good-bad)/all)
        setPos(good/all)
    }

    const updateNeutral = () => {
        setAll(all + 1)
        setNeutral(neutral + 1)
        setAvg((good-bad)/all)
        setPos(good/all)
    }

    const updateBad = () => {
        setAll(all + 1)
        setBad(bad + 1)
        setAvg((good-bad)/all)
        setPos(good/all)
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
                good {good} <br />
                neutral {neutral} <br />
                bad {bad} <br />
                all {all} <br />
                average {avg} <br />
                positive {pos}% <br />
        </div>
    )
}

export default App