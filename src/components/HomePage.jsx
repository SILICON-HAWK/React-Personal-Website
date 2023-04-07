import React from 'react'
import "../css/HomePage.css"
import WordEffect from './WordEffect.jsx'


export default function HomePage() {
  
  return (
    <div className='mainDiv'>
      <WordEffect />
      <div className="wordWrapper">
      <div className="myName" id='my-name' data-value=''>
        SILICON HAWK
      </div>
      <div className="magic">
        PORTFOLIO
      </div>
      </div>
    </div>
  )
}