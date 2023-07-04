import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import Home from './Home';
import Function from './Function';

function App() {

const [text,setText] = useState('this is test variable of react');

// Declare a new state variable, which we'll call "count"
const [count, setCount] = useState(0);

// Declare user variable to fetch users data from database via Axious
const [user, setUser] = useState([]);

/*
// via axios
const fetchData = () => {
  return axios.get("http://127.0.0.1:8000/api/users")
  .then((response) => setUser(response.data["users"]));
}
*/

// via fetch method
const fetchData = () => {
  return fetch("http://127.0.0.1:8000/api/users")
  .then((response) => response.json())
  .then((data) => setUser(data['users']));
}

useEffect(() => {
  fetchData();
},[])

  return (
    <div className="App">
      <Function/>
      <Home/>
      <h1>Welcome to React</h1>
      <span>{text}</span>
      <button>Simple Button</button>
      <Button>Bootstrap Button</Button>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <h1>User List</h1>
      <ul>
        {user && user.length>0 && user.map((userObj, index) =>(
          <li key={userObj.id}>{userObj.name} <br></br> {userObj.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
