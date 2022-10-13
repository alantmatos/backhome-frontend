import React from 'react';
import { Link } from "react-router-dom";


const Home = () => {
    return ( <>
    <div className='home'>
        <div className='    '>
            <p className='text'> 
                    The Humane Society of the United States reports that
                    10 million dogs and cats go missing each year. One
                    in three pets will become lost at some point in 
                    their life. Those are scary statistics.                    
                    <br></br>
                    <br></br>
                    LET'S CHANGE IT!!!
            </p>
        </div>
    </div>

    <div className='home-btn-container'>
            <div className='home_btn'>
        <Link  to='/createaccount' className='home_buttons'> Create An Account </Link>
        <Link  to='/foundapet' className='home_buttons'> Found a Pet? </Link>
        </div>
    </div>
    </>);
}
 
export default Home;