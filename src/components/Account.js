import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom'

export const Account = () => {
  let user = JSON.parse(localStorage.getItem('user'))
  const [id,setId] = useState(user.userDetails.id);
  const [name,setName] = useState(user.userDetails.name);
  const [address,setAddress] = useState(user.userDetails.address);
  const [city,setCity] = useState(user.userDetails.city);
  const [state,setState] = useState(user.userDetails.state);
  const [country,setCountry] = useState(user.userDetails.country);
  const [pincode,setPincode] = useState(user.userDetails.pincode);
  const navigate = useNavigate();

  async function Update(){
    if(name==""){
      alert("Please enter your Name");
    }else{
      let item = {id,name,address,city,state,country,pincode}
      let result = await fetch("http://127.0.0.1:8000/api/update-user",{
        method:'POST',
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(item)
      });
      result = await result.json();
      // console.warn("result",result);
      localStorage.setItem("user",JSON.stringify(result))
      alert("Your account details successfully updated!");
      navigate("/account")
    }
  }

  return (
    <div className='col-sm-6 offset-sm-3'>
      {
        localStorage.getItem('user')?
        <>
          <h2>Welcome {user.userDetails && user.userDetails.name}</h2>
          <h5>Your account details are as below:</h5>
          Name:<input className='form-control' type="text" onChange={(e)=>setName(e.target.value)} value={name} placeholder={user.userDetails && user.userDetails.name} /><br></br>
          Address:<input className='form-control' type="text" onChange={(e)=>setAddress(e.target.value)} value={address} /><br></br>
          City:<input className='form-control' type="text" onChange={(e)=>setCity(e.target.value)} value={city} /><br></br>
          State:<input className='form-control' type="text" onChange={(e)=>setState(e.target.value)} value={state} /><br></br>
          Country:<input className='form-control' type="text" onChange={(e)=>setCountry(e.target.value)} value={country} /><br></br>
          Pincode:<input className='form-control' type="text" onChange={(e)=>setPincode(e.target.value)} value={pincode} /><br></br>
          <button onClick={Update} className='form-control btn btn-primary'>Update</button>
        </>
        :
        null
      }
    </div>
  )
}

export default Account
