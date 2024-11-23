import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const Login = () => {
  return (
    <div className='flex items-center justify-center h-[calc(100vh-88px)] w-full mx-auto'>
      <SignIn signUpUrl='/register' />
    </div>
  )
}

export default Login
