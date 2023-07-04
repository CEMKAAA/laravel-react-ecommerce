import React from 'react'
import {Link, useNavigate} from "react-router-dom"

const Navbar = () => {
  const user = JSON.stringify(localStorage.getItem('user'));
  const navigate = useNavigate();
  return (
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">Stack Developers</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/shop">Shop</Link>
        </li>
        {
          localStorage.getItem('user')?
          <>
          <li class="nav-item">
          <Link class="nav-link" to="/account">Account</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/logout">Logout</Link>
          </li>
          </>
          :
          <>
          <li class="nav-item">
            <Link class="nav-link" to="/register">Register</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/login">Login</Link>
          </li>
          </>
        }
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
