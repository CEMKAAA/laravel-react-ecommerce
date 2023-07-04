import React,{useState} from 'react'
import {Navigate, useNavigate} from 'react-router-dom'

export const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    async function LoginUser(){
        let item = {password,email}
        // console.warn(item)
        let result = await fetch("http://127.0.0.1:8000/api/login-user",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(item)
        });
        result = await result.json();
        // console.warn("result",result);
        if(result['email']=="Email is required"){
            alert(result['email'])
        }else if(result['email']=="Email does not exists"){
            alert(result['email'])
        }else if(result['email']=="The email must be a valid email address."){
            alert(result['email'])
        }else if(result['message']=="Email is Incorrect!"){
            alert(result['message'])
        }else if(result['password']=="Password is required"){
            alert(result['password'])
        }else if(result['message']=="Password is Incorrect!"){
            alert(result['message'])
        }else{
            localStorage.setItem("user",JSON.stringify(result))
            navigate("/account")
        }
        
    }

  return (
    <div className='col-sm-6 offset-sm-3'>
        <h2>Login User</h2>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="Email" />
        <br></br>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password" />
        <br></br>
        <button onClick={LoginUser} className='btn btn-primary'>Login</button>
    </div>
  )
}

export default Login
