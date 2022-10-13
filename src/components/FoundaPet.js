import { useState } from "react";
import React from "react";
import DisplayDogAndOwner from "./DisplayDogAndOwner";

const FoundaPet = () => {

    const [pet, setPet] = useState([]);
    const [petTag, setPetTag] = useState('');
    const [safeTagInput, setSafeTagInput] = useState('');
    const [toggle, setToggle] = useState(false);
    const [ownerInfo, setOwnerInfo] = useState(false);
    const [wrongTagNumber, setWrongTagNumber] = useState(false);
    const [toggleDisplay , setToggleDisplay] = useState(true);

    let safe_tag = null;

    const petTagLookup = (e) => {
        e.preventDefault();

        fetch(`findpet/${petTag}`)
            .then((res) => res.json())
            .then(res => {
                if (res !== null) {
                    return (setPet(res))
                } else {
                    return (alert("Pet was not Found"))
                }
            })
    }

    const petArray = []

    { pet ? pet.map(dog => { return ( petArray.push(dog) ) }) : console.log("Pet has not been assigned") }

    const renderDog = petArray.map(dog => {
        { safe_tag = dog.safe_tag_number }
        return (
                <div key={dog.id} className='display_container'>
                    <div className="display_card">
                        <h3> Doggie Info</h3>                        
                    <img className='dog_profile_image' alt="dog profile" src={dog.img_url}></img>
                    <h3>{dog.name}</h3>
                    <h3>Age: {dog.age}.</h3>
                    <h3>Breed: {dog.breed}.</h3>
                    <h3>Fav. Food: {dog.favorite_food}.</h3>
                    <button onClick={(e) => { handleSafeTag(e) }}> Contact the Owner </button>
                    </div>
                </div>
        )
    });


    const renderDogOwner = petArray.map(dog => {
        return (
            <div key={dog.owner.phone} className="display_container">
                <div className="display_card">               
                <h3> Owner Info </h3>
                <img className='owner_profile_image' alt="owner profile " src={dog.owner.img_url}></img>
                <h3>Name: {dog.owner.name}</h3>
                <h3>Phone: {dog.owner.phone}</h3>
                <h3>City/State:{dog.owner.city_state}</h3>
                </div>

            </div>

        )
    });


    const handleSafeTag = (e) => {
        e.preventDefault();
        setToggle(!toggle)
    }


    const handleOwnerInfo = (e) => {
        e.preventDefault();

        if (safeTagInput == safe_tag) {
            setOwnerInfo(!ownerInfo)
            setWrongTagNumber(false)
            setToggleDisplay(!toggleDisplay)
        } else {
            setWrongTagNumber(!wrongTagNumber)
        }
    }




    return (
    <div className="display_top_container">
        { toggleDisplay ?    <div className="found_dog_container">
                <div className="tag_form">
                    <form>
                        <label> Enter the Tag Number
                        <input type="text" name='tag_number' placeholder="Tag Number" onChange={(e) => setPetTag(e.target.value)} ></input>
                        </label>
                        <button className="foundapet_btn" type="submit" value="Submit" onClick={(e) => petTagLookup(e)}> Submit </button>
                        
                    </form>
                </div>

                <div className="x"> {renderDog} </div>

                <div>
                    {toggle ? <form className="safe_tag_form">
                        <label> Enter the Safe Tag
                            <input type="text" name='safe_tag_number' placeholder="Enter the Safe-Taf" onChange={(e) => setSafeTagInput(e.target.value)} ></input>
                        </label>
                        <input type="submit" value="Submit" onClick={(e) => { handleOwnerInfo(e) }} />
                    </form> : null}
                </div>

                {/* <div>                    
                    {ownerInfo ? renderDogOwner : null}
                </div> */}
                


                <div>
                    {wrongTagNumber ? <div> <h1>Tag Number incorrect. </h1> </div> : null}
                </div>
            </div> :  <div>                    
                    {ownerInfo ? <DisplayDogAndOwner renderDogOwner={renderDogOwner} renderDog={renderDog}> </DisplayDogAndOwner> : null}
                </div> }


        {/* <div className="progress_container">
                <div className="step_1"> 1</div>
                <div className="step_2"> 2</div>
                <div className="step_3"> 3</div>
                <div className="step_4"> 4</div>
            </div> */}

    </div>
    );
}

export default FoundaPet;