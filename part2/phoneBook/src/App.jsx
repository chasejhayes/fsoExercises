import { useState, useEffect } from "react";
import people1 from './services/people'

import axios from "axios"

const App = () => {
  const [people, setPeople] = useState([
  ])

  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [completeMessage, setCompleteMessage] = useState("")


  useEffect(() => {
    people1
      .getAll()
      .then(response => {
        setPeople(response.data)
      })
  }, [])

  const Alert = ({ message }) => {
    if (message === null) {
      return null
    }
    return (
      <div className="message">
        {message}
      </div>
    )
  }


  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
    }
    // if (people.some(person => person.name === nameObject.name)) {
    //   return alert(`${newName} is already in the phone book.`)
    // } else {
    people1
      .create(nameObject)
      .then(response => {
        console.log(response)
        setNewName(newName.concat(response.data))
        setNewName("")
        setNewNumber(newNumber.concat(response.data))
        setNewNumber("")

        setCompleteMessage("Added")
        setTimeout(() => {
          setCompleteMessage(null)
        }, 5000)
      })
  }


const deleteNote = (id) => {
  // e.preventDefault()
  const url = "http://localhost:3002/api/people"
  let id1 = `${url}/${id}`
  axios.delete(id1)
}


const DeleteButton = ({ text, deleteFromServer }) => {
  return (
    <button onClick={deleteFromServer}>{text}</button>
  )
}


const handleNameChange = (event) => {
  setNewName(event.target.value)
}
const handleNumberChange = (event) => {
  setNewNumber(event.target.value)
}

function Form({ value, text }) {
  <div>{text} {value}</div>

}

return (
  <div>
    <h2>Phonebook</h2>
    <Alert message={completeMessage} />
    <form onSubmit={addName}>
      <Form text="Name1: " value={newNumber} />
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
    <h2>Numbers</h2>
    <div>
      {people.map(person =>
        <div key={person.name}>
          {person.name} {person.number}
          <DeleteButton text="Delete" deleteFromServer={() => deleteNote(person.id)} />
        </div>

      )}
    </div>
    <div>debug: {newName}</div>
  </div>

)
}

export default App