




const App = () => {
  const Header = (props) => {
    return (
      <div>
        <h1>{props.header}</h1>
      </div>
    )
  }
  const Content = (props) => {
    return (
      <div>
      <p>
        {props.title1} has {props.number1} exercises. 
      </p>
        <p>
        {props.title2} has {props.number2} exercises. 
      </p>
        <p>
        {props.title3} has {props.number3} exercises. 
      </p>
      </div>


    )
  }
  const Total = (props) => {
    return (
      <p>
        Number of exercises is {props.first + props.second + props.third}.
      </p>
    )
  }

  return (
    <div>
      <Header header="Half Stack application development" />
      <Content title1="Fundementals of Reacts" number1={10} title2="Using props to pass data" number2={7} title3="State of a component" number3={14}/>
      <Total first={10} second={7} third={14} />
    </div>
  )
}

export default App