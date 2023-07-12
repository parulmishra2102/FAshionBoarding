import React from 'react'
import Screen from './Screen'
import img2 from '../../images/login3.jpg'
import useLoginHook from './Hooks'

const Login = () => {
  const hook= useLoginHook()
  return (
    
    <div>
    <img src={img2} style={{width:'100%'}} alt=''/>
    <Screen hook={hook}/></div>
  )
}

export default Login