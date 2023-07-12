import React from 'react'
import img1 from '../../images/frame-makeup-brushes-pink-background-beauty-salon-banner-mockup-flat-lay-top-view-frame-makeup-brushes-pink-background-186619638 (1).jpg'
import useSignUp from './Hooks'
import Screen from './Screen'
const SignUp = () => {
  const hook = useSignUp()
  return (
    <div>
    <img src={img1} alt=''/>
    <Screen  hook={hook}/>
    </div>
   
  )
}

export default SignUp