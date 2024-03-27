import { useState } from 'react'
import './App.css'
import Person from './Person'
import Button from './Button'
import Header from './Header'
import List from './List'

function App() {

  return (
    <>
      <h1>Hello World</h1>
      <p><Person name="Tapas" age="52"/></p>
      <Button text="Click Me" onClick={()=>console.log("Button clicked")} />
      <Header title="Learn React from PW"/>
      <List items={["itemsOne","itemsTwo","itemsThree"]}/>
    </>
  )
}

export default App
