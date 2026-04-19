




const App = () => {

  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of Reacts",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      },
    ]
  }

  const textArr = [1, 2, 3, 4,5
  ]

  // const getTotalExercises = () =>{
  //   let x = course.parts.exercises.reduce((total, adder)=> total+adder,0)
  //   console.log(x)
  // }
  // getTotalExercises()

  const Course = ({ course }) => {
    return (
      <div>
        <h1>{course.name}</h1>
        <ul>
          {course.parts.map(part=>
            <li key={part.id}>
              Lesson "{part.name}" has {part.exercises} exercises.
            </li>
          )}
        </ul>
        <p>{
            course.parts.map(part=>part.exercises).reduce((total, adder)=> total+adder,0)


          }</p>
      </div>
    )
  }





  return <Course course={course} />
}

export default App



