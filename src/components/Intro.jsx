import React from 'react'
import '../css/Intro.css'
export default function Intro() {
  return (
    <>
      <hr className='PageBorder' />
      <div className="MainContainer">
      <div className="ProfileImageParent">
        <img src="https://avatars.githubusercontent.com/u/93534675?v=4" alt="profile pic" className='ProfileImage' />
      </div>
      <div className='IntroPage'>
        <div className="parent">
          <div className="BackgroundBox">
            Hello! My name is Silicon Hawk and I am a software developer currently studying as a student. I am passionate about creating software that is both functional and user-friendly. I am excited to work as a software engineer in the future and I am always looking for new opportunities to learn and grow. I believe that my skills in Software engineering make me a great candidate for a software development position. Thank you for taking the time to visit my portfolio website!
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
