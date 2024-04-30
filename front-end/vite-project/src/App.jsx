import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import axios from 'axios';
import bcryptjs from "bcryptjs";


function App() {
  const apiurl = import.meta.env.VITE_LOCAL_URL ;
  const [formstate,setformstate] = useState({
    username:"",
    password:""
  });
  const handlechange = (e)=>{
  setformstate({
    ... formstate,
    [e.target.name]:e.target.value,
    });
};
const handlesubmit = async (e)=>{
e.preventDefault();
console.log(mypassword);
if(formstate.username && formstate.password){
 const response = await axios.post(apiurl + "/createUser",{
    username:formstate.username,
    password:formstate.password
  });
  console.log(response);
}
};
  return (
   <div>
    <form >
      <h3>Sign up</h3>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
    placeholder='username' name="username" onChange={handlechange}/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"
    placeholder='password' name="password" onChange={handlechange}/>
  </div>
 
  <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Submit</button>
</form>
   </div>
   
       
  )
}

export default App
