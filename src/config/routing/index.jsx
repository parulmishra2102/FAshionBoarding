import React from 'react'
import {  
  BrowserRouter as Router,  
  Routes,  
  Route 
   
}   

from 'react-router-dom'; 
import Signup from '../../Modules/Signup/SignUp' 
import Login from '../../Modules/Login/Login';

 export const Routing = () => {
  return (
<Router>
<Routes >
<Route path={'/signup'} element={<Signup/>}></Route>
<Route path={'*'} element={<Login/>}></Route>
</Routes>
</Router>
  )
}

