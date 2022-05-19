import React from 'react'
import Header from './Components/Header'
import Content from './Components/Content'
import Total from './Components/Total'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentalsof React'
  const excercises1 = 10
  const part2 = 'Using props to pass data'
  const excercises2 = 7
  const part3 = 'State of a component'
  const excercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content excercises1={excercises1}/>
      <Total excercises2={excercises2} />
    </div>
  )
}

export default App