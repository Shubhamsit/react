## Context api
- there can be many context in an application like usercontext , post etc 

- we have to make a javascript file for which we want to make context  for example here UserContext.js
and create context given below

```javascript
import React from 'react'
const UserContext=React.createContext()

export default UserContext;
```
- context aapko major chiz dega provider, context variable provide karta h 

- ham isko wrapper ki tarah use karenge aur ye ban jaega provder aur jitne bhi component iske andar hone un sabko ye global UserContext ka access hoga 
## for example 
```javascript
<UserContext> // just like wrapper for Login, Card
<Login/>
<Card/>
<UserContext/>
```

## ab ham banenge ek provider
- make a file name UserContextProvider.jsx (for here )
- inside UserContextProvider.jsx
```javascript
import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

const  UserContextProvider=({children})=>{
    const [user,setUser]=useState(null)
    return (
        <UserContext.Provider value={{user,setUser}}>
        {children}
        </UserContext.Provider>
    ) 
}
export default UserContextProvider
```
-  yaha children me jo bhi components hone sab aajayenge  uske baad ham is children ko wrap  kar denge UserContext (jo hamne banaya tha ) lekin UserContext likhne se nahi hoga        hame UserContext.Provider aur saath me ek value bhi paas karna hoga.

-  aur value dene ke liyte ham useState hook use Karenge 

## Login component (ek component h jo context ko use karega)
- Login.jsx
```javascript
import React,{useState,useContext }from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPasword] = useState('')

    const {setUser}=useContext(UserContext)

    const handleSubmit=(e)=>{
         e.preventDefault()
      setUser({username,password})
    }
  return (
    <div >
        <h2>Login</h2>
        <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder='username'/>

        <input type="password"  value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
```

-  setUser ka access hame useContext(UserContext) se  mil raha h
- ye tha data bhejne ke liye 

## data lene ke liye 
-  same const {user}=useContext(UserContext)
- hamara data user ke andar h aur user hamne UserContextProvider.jsx me bana rakha h 

Profile.jsx

```javascript
import React,{useContex}from 'react'
import UserContext from '../Context/UserContext'


function Profile() {
    const {user}=useContext(UserContext)
    if(!user) return <div>please login</div>
  return (
    <div>Welocome {user.username}</div>
  )
}

export default Profile
```
## now App.jsx
```javascript
import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login'
import Profile from './Components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserContextProvider>
      <h1>chai aur react</h1>
<Login/>
<Profile/>
    </UserContextProvider>
      
    </>
  )
}

export default App
```