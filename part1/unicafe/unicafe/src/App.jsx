import { useState } from "react";

const App = () => {

  const [reviews, setReviews] = useState({
    good: 0, neutral: 0, bad: 0
  })

  const[allReviews, setAll] = useState([])

  

  const Title = ({text}) => <h1>{text}</h1>

  const handleGoodReviews = () => {
    const goodClicks = {
      ...reviews,
      good: reviews.good +1
    }
    setAll(allReviews.concat("+"))
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

  const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

  // const Statistics = ({reviews, text}) => <p>{text} {reviews}</p>

  const AskForSubmit = ({text, arr}) => {
    if (arr.length ===0){
      return (
        <p>{text}</p>
      )
    }
    return <p></p>
  }

  const Statistics = ({reviews, text, arr}) => {
    if (arr.length===0){
      return(
        <div>
        </div>
      )
    }
    else {return (<p>{text} {reviews}</p>)}

  }

 



  return (
    <div>
      <Title text="Give Feedback"/>
      <Button onClick = {handleGoodReviews} text = {"Add Good"}/>
      <Button onClick = {handleBadReviews} text={"Add Bad"}/>
      <Button onClick = {handleNeutralReviews} text={"Add Neutral"}/>
    
      <Title text="Statistics" />
      <AskForSubmit text= "Please submit a review" arr={allReviews}/>

      <Statistics text={"good"} reviews={reviews.good} arr={allReviews}/>
      <Statistics text={"neutral"} reviews={reviews.neutral} arr={allReviews}/>
      <Statistics text={"bad"} reviews={reviews.bad} arr={allReviews}/>
      <Statistics text={"total"} reviews={reviews.bad + reviews.good + reviews.neutral} arr={allReviews}/>
      <Statistics text={"average"} reviews={((reviews.good*1)+(reviews.bad*-1)+(reviews.neutral*0))/(reviews.bad + reviews.good + reviews.neutral)} arr={allReviews}/>
      <Statistics text={"positive"} reviews={(reviews.good/(reviews.bad + reviews.good + reviews.neutral))*100+"%"} arr={allReviews}/>
    </div>
  )
}



export default App