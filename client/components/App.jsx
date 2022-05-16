import React, { useState, useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import { getWelcome } from '../api'
import Search from './Search'
import Profile from './Profile'
import Teams from './Teams'

function App() {
  // const [welcomeStatement, setWelcomeStatement] = useState('')

  // useEffect(() => {
  //   getWelcome()
  //     .then((res) => {
  //       setWelcomeStatement(res.statement)
  //       return null
  //     })
  //     .catch((err) => {
  //       console.error(err.message)
  //     })
  // })

  return(
    <main>
    <h1>Eye On The Ball</h1>
    <Routes>
      <Route path='/' element={<Search />}/>
      <Route path='/profile/:id' element={<Profile />} />
      <Route path='/Teams/:type' element={<Teams />} />
    </Routes>
    </main>
  )
}

export default App
