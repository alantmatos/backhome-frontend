import { useState } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";



const CreateAccount = ({setUser}) => {

  let navigate = useNavigate();

    const [ name, setName ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ e_mail, setEmail ] = useState('');
    const [ city_state, setCity_state ] = useState('');
    const [ password, setPassword ] = useState('');
    const [img_url, setImg_url] = useState('');

    const [errors, setErrors] = useState([]);

    const handleCreateAccount = (e) => {
        e.preventDefault();

        const accountData = { name, phone, e_mail,city_state, password,img_url }

        fetch('/owners', {
          method: 'POST',
          headers: {'Content-type':'application/json',},
        body: JSON.stringify(accountData)})
        .then((res) => { if (res.ok) {
          res.json().then((user) => setUser(user))
        }
        else {
          res.json().then((err) => setErrors(err.errors));
        }})
      navigate('/profile');
    };
    // console.log(errors)





    return ( 
        <div className="sign_up_container">
        <form className="form">
            <label> Create an Account:
            <input type="text" name='name' placeholder="Name" onChange={(e)=>setName(e.target.value)} ></input>
            <input type="text" name='img_url'  placeholder="Profile Image" onChange={(e)=>setImg_url(e.target.value)}></input> 
            <input type="email" name='e_mail' placeholder="E-mail" onChange={(e)=>setEmail(e.target.value)}></input>
            <input type="tel" name='phone' placeholder="Phone" onChange={(e)=>setPhone(e.target.value)}></input>            
            <input type="text" name='city_state' placeholder="City_State" onChange={(e)=>setCity_state(e.target.value)}></input>
            <input type="password" name='password' placeholder="Password" onChange={(e)=>setPassword(e.target.value)}></input>                       
            </label>
            <input type="submit" value="Submit" onClick={(e)=>handleCreateAccount(e)} />
        </form>
        </div>
     );
}
 
export default CreateAccount;