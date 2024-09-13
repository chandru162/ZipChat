// import React from 'react'

import { useState } from 'react'
import '../css section/Singin.css'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'

function Singin() {
  let Navigate = useNavigate()
  const[mobilenumber,setmobilenumber] = useState(' ')
  const[username,setusername] = useState('')
  const[password,setpassword] = useState('')
  const[confirmPassword, setConfirmPassword] = useState('');



  const handlelogin =(e)=>{
    e.preventDefault()
    Axios.post('http://localhost:7000/users/post',{mobilenumber,username,password})
    .then(res => console.log(res.data),
       alert("Sing in successfully!"),
      Navigate('/log-in')
      //  console.log(mobilenumber,username,password)
      )
    .catch(err => console.log(err))

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
  }
  return (
    <div>

      <div className='singin-div'>
        <h1>singin</h1>
        <form onSubmit={handlelogin}>
          <input type="number" placeholder='Enter your mobil number' value={mobilenumber} onChange={(e)=>{setmobilenumber(e.target.value)}} required/>
          <br />
          <input type="text" placeholder='Enter your usename' value={username} onChange={(e) => { setusername(e.target.value) }} required />
          <br />
          <input type="password" placeholder='Enter your password' value={password} onChange={(e) => { setpassword(e.target.value) }} required />
          <br />
          <input type="password" placeholder='Enter your confirm password' onChange={(e) => { setConfirmPassword(e.target.value) }} required />
          <br />
          <button type="submit">Sing in</button>
        </form>
      </div>
    </div>
  )
}

export default Singin
