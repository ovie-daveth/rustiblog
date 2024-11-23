import React, { useEffect, useState } from 'react'
import App from '../App'
import Login from './Login'

const HomePage = () => {
    const [login, iseLogin] = useState(true)
    
    useEffect(() => {
        
    }, [])
  return login ? <App /> : <Login />
}

export default HomePage
