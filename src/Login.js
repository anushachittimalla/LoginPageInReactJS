import './App.css';
import cogno from './images/Group-1000004081.png';
import home from './images/Group-1000004082.png';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'


function Login() {
const [password, setPassword] = useState("");
const [type, setType] = useState("password");
const [icon, setIcon] = useState(eyeOff);
const[details, setDetails] =useState({
  email:"",
  passWord:""
});
const{email, passWord} = details;

const changeHandler = e =>{
  setDetails({...details, [e.target.name] : e.target.value})
};
console.log(details);

const handleToggle = () => {
    if (type==='password'){
       setIcon(eye);
       setType('text')
    } else {
       setIcon(eyeOff)
       setType('password')
    }
 };

 const LoginHandler = (e) => {
  if(email == "" || passWord == ""){
    e.preventDefault();
    alert("Enter the details");
  }
 };

  return (
    <div className="App"  style={{backgroundImage: `url(${home})`, height: "100vh",
           backgroundSize: "cover", overflowY: "auto",}}>
       <div className='background container'>
          <img src={cogno} className='cogno-image' alt="" />  
          <h4>Login</h4>
          <p> Access to our dashboard</p>
          <form>
            <label>Email or User Id</label> <br/>
            <div className="email">
                <i className="fa fa-envelope icon"></i>
                <input className="input-field" type="text" placeholder="Enter Email or User Id" name='email' onChange={(e) => changeHandler(e)}/>
            </div >
            <label>Password</label> <br/>
            <div className="email">
            <input type={type}
                   className="input-field" placeholder='Enter your Password here' 
                   name="passWord"
                   onChange={(e) => changeHandler(e)}
                />
               <Icon className="absolute password-icon" icon={icon} size={20} onClick={handleToggle}/>    
            </div>
            <p style={{textAlign:'end'}}> Forgot Password?</p>
            <div className='login'>
                <Link to="/Registration" className='Link login-link' onClick={LoginHandler}>Login</Link>  
            </div>     
      </form>
      </div>
    </div>
   
  );
}

export default Login;
