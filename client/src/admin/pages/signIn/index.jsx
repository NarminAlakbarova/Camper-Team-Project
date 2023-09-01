import React from 'react'
import { Link } from 'react-router-dom'

const SignIn = ({setCheckAdmin,checkAdmin}) => {
  console.log(checkAdmin);
  return (
    <div>
      <h1>hello sign in</h1>  
      <Link to={"home"} onClick={()=>setCheckAdmin(true)}>Submit</Link>
    </div>
  )
}

export default SignIn


