import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom'

export const Register = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [mobile,setMobile] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    async function Save(){
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(name==""){
            alert("Please enter your Name");
        }else if(email==""){
            alert("Please enter your Email");
        }else if (!filter.test(email)){
            alert("Please enter your valid Email");
        }else if(mobile==""){
            alert("Please enter your Mobile");
        }else if(password==""){
            alert("Please enter your Password");
        }else{
            let item = {name,mobile,password,email}
            // console.warn(item)
            let result = await fetch("http://127.0.0.1:8000/api/register-user",{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(item)
            });
            result = await result.json();
            console.warn("result",result);
            if(result['email']=="Email already exists"){
                alert(result['email'])
            }else{
                navigate("/thanks")
            }
            
        }
        
    }

  return (
    <div className='col-sm-6 offset-sm-3'>
        <h1>Register</h1>
        <p>Registering for this app allows you to access your order status and history.</p>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='form-control' placeholder='Enter Name'></input><br></br>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control' placeholder='Enter Email'></input><br></br>
        <input type="text" value={mobile} onChange={(e)=>setMobile(e.target.value)} className='form-control' placeholder='Enter Mobile'></input><br></br>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control' placeholder='Enter Password'></input><br></br>
        <button onClick={Save} className='btn btn-primary'>Register</button>
    </div>
  )
}

export default Register
