/**
 * Created by superman on 17/3/1.
 */
import React, {Component} from 'react'
import Board from './Board'

class Game extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
        <div className="game">
          <div className="game-board">
            <Board/>
          </div>
          <div className="game-info">

          </div>
        </div>
    )
  }
}

export default Game