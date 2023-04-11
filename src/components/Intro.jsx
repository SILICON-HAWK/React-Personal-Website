import React, { useEffect } from 'react'
import NavBar from './NavBar'
import '../css/Intro.css'
export default function Intro() {
  return (
    <>

      <div className="MainContainer">
        <div className="Title" id="TitleIntroPage">
          INTRO
        </div>
        <div className="Content">
          <div className='IntroPage'>
            <div className="parent">
              <div className="BackgroundBox ">
                <li>
                Hello! My name is ABHIJEET A S.
                </li>
                <li>                  
                I live in India and am a B.TECH student specialised in computer science.
                </li>
                <li>

                Passionate about creating software and technologies that are both functional and user friendly
                </li>
                <li>
                  
                Currently looking for opportunities to learn and grow as a software engineer/developer.
                </li>
                <li>

                I belive that my skills as a Software devloper would be a great match for a software developement position.
                </li>

              </div>
            </div>
          </div>
          <div className="ProfileImageParent">
            <img src="https://hostrider.com/images/tw.png" alt="profile pic" className='ProfileImage' />
          </div>
        </div>
      </div>
    </>
  )
}
