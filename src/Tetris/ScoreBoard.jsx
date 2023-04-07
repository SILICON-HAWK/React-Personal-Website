import React from 'react'

export default function ScoreBoard(props) {
    return (
        <div className="score-board">
            <div>Score:{props.score}</div>
            <div>Level: 1</div>
            <button className="score-board-button" onClick={(e) => {}}>PLAY</button>
            <button className="score-board-button" onClick={(e) => {}}>RESTART</button>
        </div>
    )
}