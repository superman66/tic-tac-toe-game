/**
 * Created by superman on 17/3/1.
 */
import React from 'react'

function Square(props) {
  return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
  )
}

export default Square;