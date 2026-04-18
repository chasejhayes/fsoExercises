import { useState } from "react";
import "./App.css"

const App = () => {

  const [reviews, setReviews] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const [allReviews, setAll] = useState([])



  const Title = ({ text }) => <h1>{text}</h1>

  const handleGoodReviews = () => {
    const goodClicks = {
      ...reviews,
      good: reviews.good + 1
    }
    setAll(allReviews.concat("+"))
    console.log(allReviews)
    setReviews(goodClicks)
  }

  const handleBadReviews = () => {
    const badClicks = {
      ...reviews,
      bad: reviews.bad + 1
    }
    setAll(allReviews.concat("-"))
    setReviews(badClicks)
  }

  const handleNeutralReviews = () => {
    const neutralClicks = {
      ...reviews,
      neutral: reviews.neutral + 1
    }
    setAll(allReviews.concat("n"))
    setReviews(neutralClicks)
  }

  const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

  // const Statistics = ({reviews, text}) => <p>{text} {reviews}</p>

  const AskForSubmit = ({ text, arr }) => {
    if (arr.length === 0) {
      return (
        <p>{text}</p>
      )
    }
    return <p></p>
  }



  const StatisticsLine = ({ text, reviews }) => {


return <table>
  <tbody>
    <tr>
      <td>
        {text}
      </td>
      <td>
        {reviews}
      </td>
    </tr>
  </tbody>
</table>
  }




const Statistics = ({ display }) => {
  if (display.length === 0) {
    return (
      <div></div>
    )
  }
  else {
    return (
      <div>
        <StatisticsLine text="good" reviews={reviews.good} />
        <StatisticsLine text="neutral" reviews={reviews.neutral} />
        <StatisticsLine text="bad" reviews={reviews.bad} />
        <StatisticsLine text="total" reviews={reviews.bad + reviews.good + reviews.neutral} />
        <StatisticsLine text="average" reviews={((reviews.good * 1) + (reviews.bad * -1) + (reviews.neutral * 0)) / (reviews.bad + reviews.good + reviews.neutral)} />
        <StatisticsLine text="positive" reviews={(reviews.good / (reviews.bad + reviews.good + reviews.neutral)) * 100 + "%"} />
      </div>
    )
  }
}




return (
  <div>
    <Title text="Give Feedback" />
    <Button onClick={handleGoodReviews} text={"Add Good"} />
    <Button onClick={handleBadReviews} text={"Add Bad"} />
    <Button onClick={handleNeutralReviews} text={"Add Neutral"} />

    <Title text="Statistics" />
    <AskForSubmit text="Please submit a review" arr={allReviews} />
    <Statistics display={allReviews} />
  </div>
)
}



export default App