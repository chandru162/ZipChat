// import React from 'react'
import {useNavigate} from 'react-router-dom'
import Axios from 'axios'
import { useState } from 'react'
import {useAuth} from '../component/Auth'


function Login() {
  const auth = useAuth()
  const[mobilenumber,setmobilenumber] = useState('')
  const[password,setpassword] = useState('')
  const[message,setmessage] = useState('')

  let Navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    Axios.get(`http://localhost:7000/users/get/${mobilenumber}`)
      .then(res => {
        console.log(res)
        if (res.data[0]?.mobilenumber) {
          if (res.data[0]?.password === password) {
            setmessage('')
            auth.login(res.data[0]?.username,mobilenumber)
            alert('Login successfull')
            Navigate("/chat")
          }
          else {
            setmessage("Incorrect password")
          } 
        }
        else {
          setmessage('Mobile number not found')
        }

      })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <div className='singin-div'>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input type="number" placeholder='Enter your mobil number' value={mobilenumber} onChange={(e) => { setmobilenumber(e.target.value)}} />
          <br />
          <input type="password" placeholder='Enter your password' onChange={(e)=>{setpassword(e.target.value)}}/>
          <br />
          <h5>{message}</h5>
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
