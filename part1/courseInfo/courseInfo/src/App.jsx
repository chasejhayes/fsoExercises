




const App = () => {

  const course = {
    name: "Half Stack application development",
    parts: [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    }
  ]

  } 



 



  return (
    <div>
      <h1>{course.name}</h1>
      <p>{course.parts[0].name} has {course.parts[0].exercises} exercises.</p>
      <p>{course.parts[1].name} has {course.parts[1].exercises} exercises.</p>
      <p>{course.parts[2].name} has {course.parts[2].exercises} exercises.</p>
      <p>Number of exercises is {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}.</p>  
    </div>
  )
}

export default App



  // const Header = (props) => {
  //   return (
  //     <div>
  //       <h1>{props.header}</h1>
  //     </div>
  //   )
  // }
  // const Content = (props) => {
  //   return (
  //     <div>
  //     <p>
  //       {props.title1} has {props.number1} exercises. 
  //     </p>
  //       <p>
  //       {props.title2} has {props.number2} exercises. 
  //     </p>
  //       <p>
  //       {props.title3} has {props.number3} exercises. 
  //     </p>
  //     </div>


  //   )
  // }
  // const Total = (props) => {
  //   return (
  //     <p>
  //       Number of exercises is {props.first + props.second + props.third}.
  //     </p>
  //   )
  // }