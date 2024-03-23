import React,{useState} from 'react';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import './LoginSignup.css';

const LoginSignup=() =>{

    const [action,setAction]=useState("Sign Up");
    return(
        <div className='container'>

            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                {action==="Login"?<div></div>:<div className='input'>
                    
                    <div><FaUser size={20} /></div>
                    <input type="text" placeholder="Name"/>
                </div>}
                 
                <div className='input'>
                    <div><MdEmail size={20}/></div>
                    <input type="email" placeholder="Email Id" />
                </div>
                <div className='input'>
                    <div><FaRegEye  size={20}/></div>
                    <input type="password" placeholder="Password"/>
                </div>
             
            
            {action==="Sign Up"?<div></div>:<div className='input'>
            <div className='forget'>Lost Password? <span>Click Here!</span></div>
            
            </div> }
            </div>  
            

            <div className='submits'>
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>
                    Sign Up
                </div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>
                    Login
                </div>
            </div>
        </div>
    )
}

export default LoginSignup;
