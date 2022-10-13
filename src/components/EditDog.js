import React from "react";
import { useState } from 'react';

const EditDog = ( {dog, setEditPetForm, setReload, reload } ) => {

let id = dog.id

    
    
    const [ img_url, setimg_url ] = useState(dog.img_url);
    const [ name, setdogName ] = useState(dog.name);
    const [ favorite_food, setfavorite_food ] = useState(dog.favorite_food);
    const [ age, setAge] = useState(dog.age);
    const [ breed, setBreed ] = useState(dog.breed);
    const [ tag_number, setTag_number] = useState(dog.tag_number);
    const [ safe_tag_number, setSafe_tag_number] = useState(dog.safe_tag_number);
    const [ color, setColor] = useState(dog.color);


    const handleEditPet = (e) => {
        e.preventDefault();
    
        fetch(`/dogs/${id}`,{
            method: 'PATCH',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify( { img_url, name, favorite_food, age, breed, tag_number, safe_tag_number, color } )
        })
            .then(res => res.json())
            .then(res => { setEditPetForm(false)
            })
            .then(res => { setReload(!reload) });
        }





    return ( 
        <>
        <div className="edit_pet_container">
        <form className="form">
            <label> Edit profile:
                
            <input type="text" name='img_url' value={img_url} placeholder="Profile Image" onChange={(e)=>setimg_url(e.target.value)}></input>
            <input type="text" name='name' value={name} placeholder="Name" onChange={(e)=>setdogName(e.target.value)} ></input>
            <input type="text" name='favorite_food' value={favorite_food} placeholder="Favorite Food" onChange={(e)=>setfavorite_food(e.target.value)}></input>
            <input type="text" name='age' value={age} placeholder="Age" onChange={(e)=>setAge(e.target.value)}></input>
            <input type="text" name='breed' value={breed} placeholder="Breed" onChange={(e)=>setBreed(e.target.value)}></input>
            <input type="text" name='tag_number' value={tag_number} placeholder="Tag Number" onChange={(e)=>setTag_number(e.target.value)}></input>
            <input type="text" name='safe_tag_number' value={safe_tag_number} placeholder="Safe Tag Number" onChange={(e)=>setSafe_tag_number(e.target.value)}></input>
            <input type="text" name='color' value={color} placeholder="Color" onChange={(e)=>setColor(e.target.value)}></input>
            {/* <input type="text" name='img_url' value={img_url} placeholder="Profile Image" onChange={(e)=>setmedicalCondition(e.target.value)}></input> */}
            </label>
            <input className='edit_submit' type="submit" value="Submit" onClick={(e)=>handleEditPet(e)} />
            <input className='edit_submit' type="submit" value="Cancel" onClick={()=>setEditPetForm(false)} />
        </form>
        </div>
        </>
     );
}
 
export default EditDog;