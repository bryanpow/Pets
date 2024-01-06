import { useState, useEffect } from 'react'

import {Form} from './Form'
import PetList from './PetList'
function App() {

  return (
    <>
    <h1>Pet Tracker</h1>
      <Form />
      <PetList />
    </>
  )
}

export default App
