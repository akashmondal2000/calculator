import React from 'react'
import "../style/Screen.css"

const Screen = ({value}) => {
  return (
    <div className="screen" max={70}>
    {value}
    </div>
  )
}

export default Screen;