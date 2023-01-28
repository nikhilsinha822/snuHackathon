import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import './signUp.css'

const SignUp = ({setEmail}) => {
    const baseURL = "http://localhost:5000";
    const navigate = useNavigate()
    const [user,setUser] = useState({
        username:"",
        email:"",
        password:"",
        cnfPswd:""
    })
    const handleChange = (e) =>{
        const {name,value} = e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const {password,cnfPswd} = user
        if(password!==cnfPswd){
        alert('password and confirm password should be same')
        }
        else{
        axios.post(`${baseURL}/signup`,user)
        .then((res)=>{
            
        if(res.data.msg==='signup successful redirect to the login page'){
            console.log(res.data)
            setEmail(user.email)     
            navigate('/otp-verification')
        }
            else{
            alert(res.data.msg) 
            return
        }
        })
    }
    }
    return <>
    {/* <form> */}
    <div className='basicForm1'>
        <span>
        <h1>Sign Up</h1>
        <input
            placeholder="username"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
        />
        <input
            type="email"
            placeholder="email"
            name='email'
            value={user.email}
            onChange={handleChange}
            required
        />
        <input
            placeholder="password"
            name='password'
            value={user.password}
            onChange={handleChange}
            required
        />
        <input
            placeholder="confirm password"
            name='cnfPswd'
            value={user.cnfPswd}
            onChange={handleChange}
            required
        />
        <button onClick={handleSubmit}>Submit</button>
        </span>
    </div>
        
    {/* </form> */}
    </>
}

export default SignUp