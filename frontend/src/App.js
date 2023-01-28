import {BrowserRouter, Route, Routes} from "react-router-dom"
import SignIn from './pages/signin/singin'
import SignUp from './pages/signup/signup'
import OTP from './pages/otpverf/otpveri'
import React,{ useState } from "react"
import Home from './pages/home/home'
import WareHouse from "./pages/warehouse/warehouse"

function App() {
  const [email,setEmail]=useState()
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home email={email}/>}/>
        <Route path='/signIn' element={<SignIn setEmail={setEmail}/>}/>
        <Route path='/signUp' element={<SignUp  setEmail={setEmail}/>}/>
        <Route path='/forgetPassword'/>
        <Route path='/otp-verification' element={<OTP email={email}/>}/>
        <Route path='/wareHouse' element={<WareHouse email={email}/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
