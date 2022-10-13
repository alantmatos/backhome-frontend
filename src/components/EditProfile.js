import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EditProfile = ({user, setUser }) => {

    let navigate = useNavigate();
    const id = user.id;
    

    const [name, setName] = useState(user.name);
    const [phone, setPhone] = useState(user.phone);
    const [e_mail, setE_mail] = useState(user.e_mail);
    const [city_state, setCity_state] = useState(user.city_state);
    const [img_url, setImg_url] = useState(user.img_url);

const handleEditProfile = (e) => {
    e.preventDefault();

    fetch(`/owners/${id}`,{
        method: 'PATCH',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(
            {
                name: name,
                phone: phone,
                e_mail: e_mail,
                city_state: city_state,
                img_url: img_url
            }
        )})
        .then(res => res.json())
        .then(user => { setUser(user)
        });
        navigate('/profile');
    }

    return ( 
    <>    
        <div className="edit_profile_container">
        <form className="form">
            <label> Edit My Profile:
            <input type="text" name='name' value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)} ></input>
            <input type="text" name='img_url' value={img_url} placeholder="Profile Image" onChange={(e)=>setImg_url(e.target.value)}></input>
            <input type="email" name='e_mail' value={e_mail} placeholder="E-mail" onChange={(e)=>setE_mail(e.target.value)}></input>
            <input type="tel" name='phone' value={phone} placeholder="Phone" onChange={(e)=>setPhone(e.target.value)}></input>            
            <input type="text" name='city_state' value={city_state} placeholder="City_State" onChange={(e)=>setCity_state(e.target.value)}></input>
            
            </label>
            <input className='edit_submit' type="submit" value="Submit" onClick={(e)=>handleEditProfile(e)} />
        </form>
        </div>
    </>
     );
}
 
export default EditProfile;