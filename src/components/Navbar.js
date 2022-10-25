import React from 'react';
import banner from '../Assets/banner.png'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import style from '../css/Navbar.css'

const Navbar = ({ user, setUser }) => {

    let navigate = useNavigate();

    const handleLogout = () => {
        fetch('/logout', {
            method: 'DELETE'
        })
            .then((res) => {
                if (res.ok) {
                    setUser(null)
                }
            })
        navigate('/home')
    };



    return (<>

        <div className='navbar_container'>

            <div className='user-brand'>

                {user ?
                    <div className='user_card'>
                        <div className='user_header'>
                            <div className='user_img'>
                                <img src={user.img_url} className="img_size" alt="User profile"></img>
                            </div>
                            <div className='user_name'>
                                <h1>Hi, {user.name}.</h1>
                            </div>
                        </div>

                        <div className='user_info'>
                            <p> Phone Number: {user.phone}.</p>
                            <p> E-mail: {user.e_mail}.</p>
                            <p> Location: {user.city_state}.</p>
                        </div>

                        <div className='user_btn'>
                            <Link to='/editprofile' className='user_buttons'> Edit profile</Link>
                            <Link to='/addapet' className='user_buttons'> Add a pet</Link>
                        </div>

                    </div>
                    : null}


                <div className='title_container'>
                    <img className='navbar_img' src={banner} alt='banner'></img>
                    <h1 className='title'>Back Home</h1>
                </div>

            </div>

        </div>

        <div className='nav_btn'>

            <ul className='nav_ul'>
                <li>
                    <Link to='/home' className='nav_buttons'> Home </Link>
                </li>

                <li>
                    {user ? <Link to='/home' className='nav_buttons' onClick={() => handleLogout()}> LogOut</Link> : <Link to='/login' className='nav_buttons'> Login</Link>}
                </li>

                <li>
                    <Link to='/about' className='nav_buttons'> About</Link>
                </li>

                { user ? <li>
                    <Link to='/profile' className='nav_buttons'> My Pets</Link>
                </li> : null }
            </ul>
        </div>

    </>);
}

export default Navbar;


