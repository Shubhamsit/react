import React from 'react'
import UserContext from '../Context/UserContext'
import {useContext} from 'react';


function Profile() {
    const {user}= useContext(UserContext)
    if(!user) return <div>please login</div>
  return (
    <div>Welocome {user.username}</div>
  )
}

export default Profile;