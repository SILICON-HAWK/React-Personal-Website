import React from "react"
import HomePage from "./components/HomePage"
import Intro from "./components/Intro"
import SkillPage from "./components/SkillPage"
// import Tetris from "./components/Tetris.jsx"
// tetris has been scrapped for now since it dosent work properly
import ContactMe from "./components/ContactMe"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>

      <div>
        <Router>
          <Routes>
            <Route exact path="React-Personal-Website/" element={
              <>
                <div><HomePage /></div>
                <div><Intro /></div>
                <div><SkillPage /></div>
                <div><ContactMe /></div>

              </>
              } />
            {/* <Route path="React-Personal-Website/Tetris" element={<Tetris />} /> */}
            <Route />
          </Routes>
        </Router>
      </div>

    </>
  )
}


export default App

{/* 
<div>
<div>
  <HomePage />
</div>
<div>
  <Intro />
</div>
<div>
  <SkillPage />
</div>
<div>
  <Tetris/>
</div>
<div>
  <ContactMe />
</div>
</div> 
*/}
