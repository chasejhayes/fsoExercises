import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0])

  // display highest amount of votes
  // you can sort the arr by highest and return the first value
  // but that only returns the number
  // say the highest votes is 3 for the third quote
  // it's at position votes[2] and that is equal to anecdotes[2]

  function getHighestVoted() {
    let maxValue = Math.max(...votes);
    if (maxValue == 0) {
      return ""
    }
    else {
      let maxIndex = votes.indexOf(maxValue);
      return anecdotes[maxIndex]
    }
  }



  function getRandomQuote(max) {
    return Math.floor(Math.random() * max)
  }

  const setSelect = () => {
    return setSelected(getRandomQuote(8))
  }

  const randomQuote = () => {
    return anecdotes[selected]
  }


  const addVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  const Button = ({ onclick, text }) => <button onClick={onclick}>{text}</button>

  const Display = ({ text }) => <div>{text}</div>





  return (
    <div>
      <Display text={randomQuote()} />
      <Button onclick={setSelect} text="Get a random quote" />
      <Button onclick={addVote} text="Vote" />
      <Display text="Most popular:" />
      <Display text={getHighestVoted()} />
    </div>
  )
}



export default App

// pressing the button