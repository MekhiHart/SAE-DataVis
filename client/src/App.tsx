import { useState } from 'react'
import HomeView from './views/Home_View/HomeView'
import './App.css'

function App() {

  return (
    <>
      <span style={{color:"black", paddingBottom: 30}}>Race Logs</span>
      <HomeView/>
      <HomeView/>
    </>
  )
}

export default App
