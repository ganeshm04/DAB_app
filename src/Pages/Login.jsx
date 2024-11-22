import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState("Sign Up")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  }
  return (
    <form className='min-h-[80vh] flex items-center' action="" onSubmit={() => onSubmitHandler}>
      <div className='flex flex-col m-auto gap-3 items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg '>
        <p className='text-2xl font-semibold'>{state === "Sign Up" ? "Create Account" : "Login"}</p>
        <p>PLease {state === "Sign Up" ? "sign up" : "login"} Book appointment</p>
        {
          state=== "Sign Up" && 
          <div className='w-full text-left'>
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' required type="text" onChange={(e) => setName(e.target.value)} value={name} />
        </div>
        }
        
        <div className='w-full text-left'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' required type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className='w-full text-left'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' required type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        <button className='bg-primary text-white w-full py-2 rounded-md text-base'>{state === "Sign Up" ? "Create Account" : "Login"}</button>
        {
          state === "Sign Up"
            ?
            <p>Already have an account? <span className='text-primary underline cursor-pointer' onClick={()=>setState('Login')}>Login Here</span> </p>
            :
            <p>Create an new account ?  <span className='text-primary underline cursor-pointer' onClick={()=>setState('Sign Up')} >click here</span> </p>
        }
      </div>
    </form>
  )
}

export default Login