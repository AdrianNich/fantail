import React, { useState, useEffect } from 'react'

import { getWelcome } from '../api'
import Cricket from './Cricket'

function App() {
  const [welcomeStatement, setWelcomeStatement] = useState('')

  useEffect(() => {
    getWelcome()
      .then((res) => {
        setWelcomeStatement(res.statement)
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  })

  return(
    <main>
    <h1>{welcomeStatement}</h1>
    <Cricket />
    </main>
  )
}

export default App
