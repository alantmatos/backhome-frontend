import React from 'react';
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Footer from "./components/Footer";
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';
import FoundaPet from './components/FoundaPet';
import UserPage from './components/UserPage';
import AddAPet from './components/AddAPet';
import EditProfile from './components/EditProfile';
import About from './components/About';





function App() {

const [ user, setUser ] = useState(null);
const [ reload, setReload ] = useState (false);


useEffect(()=> { fetchData() },[reload]);


const fetchData = () => {
    
  fetch('/autologin')
  .then((r)=> {
    if (r.ok) {
      r.json().then((user) => setUser(user));
    }
  })

  }
  

  return (
    <BrowserRouter>
      <nav> <Navbar user={user} setUser={setUser}></Navbar> </nav>      
        <Routes>
            <Route exact path='/' element={<Home></Home> }> </Route>
            <Route path='/home' element={<Home></Home> }> </Route>
            <Route path='/about' element={<About></About> }> </Route>
            <Route path='/login'element={<Login setUser={setUser} ></Login> }></Route>
            <Route path='/createaccount' element={<CreateAccount setUser={setUser}></CreateAccount>}> </Route> 
            <Route path='/foundapet' element={<FoundaPet></FoundaPet>}></Route>
            <Route path='/profile' element={<UserPage user={user} setUser={setUser} reload={reload} setReload={setReload}></UserPage> }> </Route>
            <Route path='/editprofile' element={<EditProfile user={user} fetchData={fetchData} setUser={setUser}></EditProfile> }> </Route>
            <Route path='/addapet' element={<AddAPet user={user} reload={reload} setReload={setReload}></AddAPet> }> </Route> 
        </Routes>
      <nav> <Footer></Footer> </nav>      
    </BrowserRouter>
  );
}

export default App;

