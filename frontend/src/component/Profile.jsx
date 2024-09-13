import React from 'react'

import { useAuth } from './Auth'

function Profile() {
    const auth = useAuth()
  return (
    <div>
      <h4>username :{auth.username}</h4>
      <h6>mobile number :{auth.mobilenumber}</h6>
      <button type="button" onClick={auth.logout}>Logout</button>
    </div>
  )
}

export default Profile
