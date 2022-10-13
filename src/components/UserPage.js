import React from 'react';
import { useState } from 'react';
import EditDog from './EditDog';

const UserPage = ({ user, fetchData, setUser, setReload, reload }) => {

    const [editPetForm, setEditPetForm] = useState(false);
    const [currentDog, setCurrentDog] = useState('');

    let dogArr = [];
    { user ? user.dogs.map(dog => { return ( dogArr.push(dog))}) : console.log("no user") };


    const renderDogInfo = dogArr.map(dog => {
        return (
            <div className='dog_card' key={dog.id}>
                <div className='dog_header'>
                    <img className='dog_img' alt="dog" src={dog.img_url}></img>
                    <h2>{dog.name}.</h2>
                </div>
                <div className='dog_info' >
                    <p>Age: {dog.age}.</p>
                    <p>Breed: {dog.breed}.</p>
                    <p>Favorite Food: {dog.favorite_food}.</p>
                    <p>Tag Number: {dog.tag_number}.</p>
                    <p>Safe-Tag: {dog.safe_tag_number}.</p>
                    <div className='button_container'>
                        <button onClick={() => { handleEditPet(dog) }} className='pet_card_buttons' > Edit</button>
                        <button onClick={() => { handleDeletePet(dog.id) }} className='pet_card_buttons'> Delete </button>
                    </div>
                </div>
            </div>
        )
    });


    const handleDeletePet = (id) => {
        fetch(`/dogs/${id}`, {
            method: 'DELETE'
        })
            .then((r) => {
                if (r.ok) {
                    setReload(!reload)
                } else {
                    console.log('res not ok')
                }
            });
    }



    const handleEditPet = (dog) => {
        setEditPetForm(!editPetForm)
        setCurrentDog(dog)

    }


    return (
        <>
        <div className='dog_container'>
            {renderDogInfo}
            {editPetForm ? <EditDog dog={currentDog} setEditPetForm={setEditPetForm} reload={reload} setReload={setReload}> </EditDog> : null   }
        </div>
        </>
    );
}

export default UserPage;