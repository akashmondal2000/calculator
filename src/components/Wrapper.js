import React from 'react'
import "../style/Wrapper.css"

const Wrapper = ({children}) => {
  return (
    <div className='wrapper'>
      {children}
    </div>
  )
}

export default Wrapper;


// This is a React functional component that takes a single prop, "children," 
// and returns a div with class "wrapper" that contains the children passed to the component.
//  The component acts as a wrapper for any elements passed to it as children.