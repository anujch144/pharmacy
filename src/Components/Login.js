import React,{useState} from 'react';
import './Login.css'

const Login = ({history}) => {
   const handleSubmit = (e) => {
     e.preventDefault();
     const username = e['target'][0]['value'];
     const password = e['target'][1]['value'];
     localStorage.setItem('user', JSON.stringify({username: username, password: password}))
    if(username==='test-admin'&&password==='test-admin')
      history.push('/admindash');
    else if(username==='test-sales'&& password==='test-sales')
      history.push('/salesdash')
    else 
      history.push('/login');
   }
  return(
    <div className="centre">
    <h1>Welcome to Online pharmacy</h1>
    <form onSubmit = {handleSubmit}>
      <label>
        <p>Username</p>
        <input type="text" name='username'/>
      </label>
      <label>
        <p>Password</p>
        <input type="password" name='password'/>
      </label>
      <div>
      <button type="submit" className="btn btn-outline-success" >Submit</button>
      </div>
    </form>
    </div>
  )
}
export default Login;