import React from "react"
import HomePage from "./components/HomePage"
import Intro from "./components/Intro"
import SkillPage from "./components/SkillPage"
import Tetris from "./Tetris/Tetris.jsx"
import ContactMe from "./components/ContactMe"

function App() {

  return (
    <div className="App">
      <div className="homepage">
        <HomePage />
      </div>
      <div>
        <Intro />
      </div>
      <div>
        <SkillPage />
      </div>
      <div>
        <Tetris />
      </div>
      <div>
        <ContactMe />
      </div>
    </div>
  )
}

export default App
