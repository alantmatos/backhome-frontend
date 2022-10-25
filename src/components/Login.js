import { useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";


const Login = ({setUser}) => {

    let navigate = useNavigate();
  
    const [ e_mail, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [errors, setErrors] = useState([]);

    const login = (e) => {
        
        e.preventDefault();

        fetch('/login', {
            method: 'POST',
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({ e_mail,password }),})
            .then((r)=> {
                if (r.ok) {
                    r.json().then((user) => {
                        setUser(user)
                    });
                } else {
                    r.json().then((err) => { setErrors(err.errors)})
                }
            });
            navigate('/profile')
    }


    return ( 
        <div className="login_container">
            <form onSubmit={login} className="login_form">
                <label> Login: 
                    <input type="e_mail" name='e_mail' placeholder="E-mail" onChange={(e)=>setEmail(e.target.value)}></input>
                    <input type="password" name='password' placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>           
                </label>
            <input className="submit" type="submit" value="Submit"  />
            </form>
        </div>
     );
}
 
export default Login;


