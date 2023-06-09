import { useState } from 'react'

const Button = (props) => {
    return (
        <button onClick = {props.handleClick}>
            {props.text}
        </button>
    )
}

const StatisticsLine = (props) => {
    if (props.text == "positive") {
        return (
            <tr>
                <td>
                    {props.text}
                </td>
                <td>
                    {props.value}%
                </td>
            </tr>
            
        )
    }
    return (
        <tr>
                <td>
                    {props.text}
                </td>
                <td>
                    {props.value}
                </td>
        </tr>
    )
}
const App = () => {
  // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const updateGood = () => setGood(good + 1)

    const updateNeutral = () => setNeutral(neutral + 1)

    const updateBad = () => setBad(bad + 1)

    return (
        <div>
            <h1>
                give feedback
            </h1>
            <p>
                <Button 
                    handleClick = {updateGood}
                    text = "good"
                />
                <Button 
                    handleClick = {updateNeutral}
                    text = "neutral"
                />
                <Button 
                    handleClick = {updateBad}
                    text = "bad"
                />
            </p>
            <table>
                <tbody>
                    <StatisticsLine 
                        text = "good"
                        value = {good}
                    />
                    <StatisticsLine 
                        text = "neutral"
                        value = {neutral}
                    />
                    <StatisticsLine 
                        text = "bad"
                        value = {bad}
                    />
                    <StatisticsLine 
                        text = "average"
                        value = {((good - bad) / (good + bad + neutral)).toFixed(2)}
                    />
                    <StatisticsLine 
                        text = "positive"
                        value = {((good) / (good + bad + neutral)).toFixed(2)}
                    />
                </tbody>
            </table>
               {/*  <StatisticsLine 
                    text = "good"
                    value = {good}
                />
                <StatisticsLine 
                    text = "neutral"
                    value = {neutral}
                />
                <StatisticsLine 
                    text = "bad"
                    value = {bad}
                />
                <StatisticsLine 
                    text = "average"
                    value = {Math.round((good - bad) / (good + bad + neutral))}
                />
                <StatisticsLine 
                    text = "positive"
                    value = {(good) / (good + bad + neutral)}
                /> */}
        </div>
    )
}

export default App