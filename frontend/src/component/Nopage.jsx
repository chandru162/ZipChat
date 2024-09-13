import React from 'react'
import {Link} from 'react-router-dom'
function Nopage() {
  return (
    <div>
        <h1>404 Error !</h1>
      <h3>Page is not found !</h3>
      <h3><Link to={'/'}>Go to Home</Link></h3>
      
    </div>
  )
}

export default Nopage
