import React from "react";
import ReactDOM from 'react-dom/client';
import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Register from "./components/Register";
import Login from "./components/Login";
import Thanks from "./components/Thanks";
import Account from "./components/Account";
import Logout from "./components/Logout";
import Shop from "./components/Shop";
import {Routes,Route} from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

function App(){
  return(
    <>
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path="/about" element={<About/>}></Route>
                <Route exact path="/contact" element={<Contact/>}></Route>
                <Route exact path="/register" element={<Register/>}></Route>
                <Route exact path="/login" element={<Login/>}></Route>
                <Route exact path="/thanks" element={<Thanks/>}></Route>
                <Route exact path="/account" element={<Account/>}></Route>
                <Route exact path="/logout" element={<Logout/>}></Route>
                <Route exact path="/shop" element={<Shop/>}></Route>
            </Routes>
        </Router> 
    </>
  )
}

export default App;