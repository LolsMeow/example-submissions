const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>
       Number of exercises {props.exercises1 + props.exercises2 + props.exercises3} 
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course = {course} />
      <Part
          part = {part1.name}
          exercises = {part1.exercises1}
      />
      <Part
          part = {part2.name}
          exercises = {part2.exercises1}
      />
      <Part
          part = {part3.name}
          exercises = {part3.exercises1}
      />
      <Total 
          exercises1 = {part1.exercises1}
          exercises2 = {part2.exercises2}
          exercises3 = {part3.exercises3}
      />
    </div>
  )
}
