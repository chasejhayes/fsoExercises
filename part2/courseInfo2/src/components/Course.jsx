  const Course = ({ course }) => {

    return (
      <div>
        {course.map(item => (
          <div key={item.id}>
            <h2>{item.name}</h2>
            <ul>
              {item.parts.map(part => (
                <li key={part.id}>{part.name} has {part.exercises} exercises.</li>
              ))}
            </ul>
            <p>Total of {
              item.parts.map(part => part.exercises).reduce((total, adder) => total + adder, 0)
            } exercises.</p>
          </div>
        ))}
      </div>


    )
  }

  export default Course