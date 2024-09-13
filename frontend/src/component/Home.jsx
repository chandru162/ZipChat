// import React from 'react'
import '../css section/Home.css'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className='home-div-parant'>
      <h2>Welcome to ZipChat</h2>
      <div className='home-div'>
        <Link to={'/log-in'}><button className='log-in-btn'>Loge in</button></Link>
      </div>
      
    </div>
  )
}

export default Home
