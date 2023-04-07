import React from 'react'
import GridSquare from './GridSquare'
export default function GridBoard(props) {

    const grid = []
    for(let row = 0; row <18; row++){
        grid.push([])
        for(let column = 0; column<10; column++){
            grid[row].push(<GridSquare key={`$(col)$(row)`} color='1'  />)
        }
    }

  return (
    <>
    <div className="GridBoard">
        {grid}
    </div>
    </>
  )
}
