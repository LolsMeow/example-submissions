import { useState } from 'react'

const Statistics = (props) => {
    const all = props.good + props.neutral + props.bad
    if (all > 0 ){
        const avg = (props.good - props.bad)/all
        const pos = props.good / all
        return (
            <div>
                Average {avg} <br />
                Positive {pos}%
            </div>
        )
    }
    else {
        return (
            <div>
                No feedback given
            </div>
        )
    }
}


const App = () => {
  // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const updateGood = () => {
        setGood(good + 1)
    }

    const updateNeutral = () => {
        setNeutral(neutral + 1)
    }

    const updateBad = () => {
        setBad(bad + 1)
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
            <Statistics
                good = {good}
                neutral = {neutral}
                bad = {bad}
            />
        </div>
    )
}

export default App