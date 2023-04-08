import React from 'react'
export default function TetrisGameEngine() {
    console.log('tetris logic working ')

    // function TetrisConstructs() {

        const GAMECLOCK = 1000
        const BLOCKLENGTH = 30
        const ROWS = 20
        const COLUMNS = 10
        const SCORE = 10
        const SHAPES =
            [
                [],
                [
                    [0, 0, 0, 0],
                    [1, 1, 1, 1],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ],

                [
                    [2, 0, 0],
                    [2, 2, 2],
                    [0, 0, 0],
                ],

                [
                    [0, 0, 3],
                    [3, 3, 3],
                    [0, 0, 0],
                ],

                [
                    [4, 4],
                    [4, 4],
                ],

                [
                    [0, 5, 5],
                    [5, 5, 0],
                    [0, 0, 0],
                ],

                [
                    [0, 6, 0],
                    [6, 6, 6],
                    [0, 0, 0],
                ],

                [
                    [7, 7, 0],
                    [0, 7, 7],
                    [0, 0, 0],
                ],

            ]
        const COLORS = [
            '#000000',
            '#FF0000',
            '#00FF00',
            '#0000FF',
            '#FFFF00',
            '#00FFFF',
            '#10FF01',
            '#F000FF'
        ]
    // }
    class GameEngine{
        constructor(ctx){
            this.ctx = ctx
            this.FallingPiece = null 
            this.grid = this.InitialiseGrid()
        }

        InitialiseGrid(){
            let grid = []

            for (var i = 0; i < ROWS; i++) {
                grid.push([])
                
                for (var j = 0; j<COLUMNS; j++){
                    grid[grid.length - 1].push(0)
                }

            }return grid;

        }

        Collision(){
            const shape = Candidate || this.FallingPiece.shape
            const n = shape.length
            
        }
    }

}


