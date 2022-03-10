import React,{useState} from 'react';
import './Login.css'

function Login() {
  const [user,setuser]=useState(null);
  const [pass,setpass]=useState(null);
  const handleOnchange=(event)=>{
     setuser(event.target.value)
   }
  return(
    <div class="centre">
    <h1>Welcome to Online pharmacy</h1>
    <form>
      <label>
        <p>Username</p>
        <input type="text" value={} onChange={handleOnchange} />
      </label>
      <label>
        <p>Password</p>
        <input type="password" />
      </label>
      <div>
      <button type="button" class="btn btn-outline-success" >Submit</button>
      </div>
    </form>
    </div>
  )
}
export default Login;