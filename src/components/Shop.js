import React,{useEffect,useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export const Shop = () => {

    const[menu,setMenu] = useState([]);

    const fetchData = () => {
        return axios.get("http://127.0.0.1:8000/api/menu")
        .then((response) => setMenu(response.data['categories']));
    }

    useEffect(() => {
        fetchData();
    },[])

  return (
    <div>
        {menu.map((menuObj) => {
            return <div>
                <h4>&nbsp;{menuObj.name}</h4>
                {menuObj.categories.map((catObj) => {
                    return <h5>&nbsp;&nbsp;&nbsp;<Link to={catObj.url}>{catObj.category_name}</Link></h5>
                })}
            </div>
        })}
    </div>
  )
}

export default Shop
