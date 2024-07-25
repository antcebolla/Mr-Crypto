import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Currencies from './components/Currencies'

function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <Currencies/>
    </>
  )
}

export default App
