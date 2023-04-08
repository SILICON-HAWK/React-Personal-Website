import React from 'react'
import '../Tetris/Tetris.css'
import GridBoard from './GridBoard'
import NextBlock from './NextBlock'
import ScoreBoard from './ScoreBoard'

export default function Tetris() {
  return (
    <>
      <div className="TetrisBody">
        <h1>TETRIS</h1>
        <div className="main-board">
        <div>
          <NextBlock />
        </div>
        <div>
          <GridBoard />
        </div>
        <div>
        <ScoreBoard />
        </div>
        </div>
      </div>
    </>
  )
}
