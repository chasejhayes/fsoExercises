




const App = () => {

  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  }
  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  }
  const part3 = {
    name: "State of a component",
    exercises: 14
  }

  const total = part1.exercises + part2.exercises + part3.exercises;



  return (
    <div>
      <h1>{course}</h1>
      <p>{part1.name} has {part1.exercises} exercises.</p>
      <p>{part2.name} has {part2.exercises} exercises.</p>
      <p>{part3.name} has {part3.exercises} exercises.</p>
      <p>The total exercises is {total}</p>
      {/* <Content title1="Fundementals of Reacts" number1={10} title2="Using props to pass data" number2={7} title3="State of a component" number3={14}/>
      <Total first={10} second={7} third={14} /> */}
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