import React from "react";

const DisplayDogAndOwner = ({renderDogOwner,renderDog}) => {


    return ( 
        <div className="display">

            <div className="thank_you_msg">
            <h2> Thank you for helping this puppy get Back Home :D  
                
            </h2>
            </div>


        <div className="display_owner_dog">        
        {renderDogOwner}
        {renderDog}
        </div>

      

        </div>
       
     );
}
 
export default DisplayDogAndOwner;