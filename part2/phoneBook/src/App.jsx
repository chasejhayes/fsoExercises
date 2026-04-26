import { useState, useEffect } from "react";
import axios from "axios";
import people from './services/people'

const App = () => {
  const [persons, setPersons] = useState([
  ])

  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")

  // const hook = () => {
  //   people
  //     .getAll()
  //     .then(response => {
  //       setPersons(response.data)
  //     })
  // }

  // useEffect(hook, [])

  useEffect(() => {
    people
    .getAll()
    .then(response => {
      setPersons(response.data)
    })
  }, [])


  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
    }



    if (persons.some(person => person.name === nameObject.name)) {
      return alert(`${newName} is already in the phone book.`)
    } else {
      people
        .create(nameObject)
        .then(response => {
          console.log(response)
          setNewName(newName.concat(response.data))
          setNewName("")
          setNewNumber(newNumber.concat(response.data))
          setNewNumber("")
        })
    }
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
          {persons.map(person =>
            <div key={person.name}>
              {person.name} {person.number}
            </div>
          )}
        </div>
        <div>debug: {newName}</div>
      </div>

    )
  }

  export default App