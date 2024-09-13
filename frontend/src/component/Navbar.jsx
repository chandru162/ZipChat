// import React from 'react'
import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <NavLink to={'/'}>Home</NavLink>,..
      <NavLink to={'/log-in'}>Login</NavLink>,..
      <NavLink to={'/sing-in'}>Singin</NavLink>,..
      <NavLink to={'/chat'}>Chats</NavLink>,...
      <NavLink to={'/profile'}>Profile</NavLink>,
    </div>
  )
}

export default Navbar
