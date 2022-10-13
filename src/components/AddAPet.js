import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddAPet = ({user, updateDog, setReload, reload}) => {

    const owner = user;

    const [img_url, setImg_url] = useState('');
    const [name, setName] = useState('');
    const [favorite_food, setFavorite_food] = useState('');
    const [age,setAge] = useState('');
    const [breed,setBreed] = useState('');
    const [tag_number,setTag] = useState('');
    const [safe_tag_number,setSafeTag] = useState('');
    const [color,setColor] = useState('');
    
    
    

    const petData = { img_url, name, favorite_food, age, breed, tag_number, safe_tag_number, color, owner }

    let navigate = useNavigate();

    const handleAddaPet = (e) => {
        e.preventDefault();
        

        fetch('/dogs', {
          method: 'POST',
          headers: {'Content-type':'application/json',},
        body: JSON.stringify( petData )})
        .then(res=> res.json())
        .then(res => setReload(!reload))
        .then( navigate('/profile'))
      
    }



    return ( 
        <div className="Add_pet_container">
        <form className="form">
            <label> Add A Pet:
                <input type="text" name='img_url'  placeholder="Profile Image" onChange={(e)=>setImg_url(e.target.value)} ></input>
                <input type="text" name='name'  placeholder="Name" onChange={(e)=>setName(e.target.value)}></input>
                <input type="text" name='Breed'  placeholder="Breed" onChange={(e)=>setBreed(e.target.value)}></input>
                <input type="text" name='color'  placeholder="Color" onChange={(e)=>setColor(e.target.value)} ></input>
                <input type="text" name='Favorite_Food'  placeholder="Favorite Food" onChange={(e)=>setFavorite_food(e.target.value)}></input>
                <input type="text" name='Age'  placeholder="Age" onChange={(e)=>setAge(e.target.value)} ></input>                
                <input type="text" name='tag_number'  placeholder="Tag Number" onChange={(e)=>setTag(e.target.value)} ></input>                
                <input type="text" name='safe_tag_number'  placeholder="Safe Tag Number" onChange={(e)=>setSafeTag(e.target.value)}></input>
                
            </label>
            <input className='pet_submit' type="submit" value="Submit" onClick={(e)=>handleAddaPet(e)} />
        </form>
        </div>
     );
}
 
export default AddAPet;