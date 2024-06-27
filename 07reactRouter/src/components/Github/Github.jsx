import React, { useEffect } from 'react'
import { useState,} from 'react'
import { useLoaderData } from 'react-router-dom'



function Github() {

    const data=useLoaderData()

// below is the alternate method to handle api or routes or data coming from a website 
    // const [data, setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/Shubhamsit')
    //     .then((response)=> {return response.json()})
    //     .then((data)=>{console.log(data);
    //         return data
    //     })
    //     .then((data)=>setData(data))
       

    // },[])

    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>Github Followers:{data.followers}
<br />
<h1>{data.name}</h1>
    <img className='text-center'src={data.avatar_url} alt="Gitpicture" width={300} /></div>
  )
}

export default Github
export  const githubLoader= async ()=>{
    const response =await fetch('https://api.github.com/users/Shubhamsit')
    return response.json()
}