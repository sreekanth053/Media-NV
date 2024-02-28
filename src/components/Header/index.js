import React from 'react'
import './index.css';
import { FaUserCircle } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Dashboard from '../Dashboard';


function Header() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };


  const nav_items=[
    {
      name:"Bid",
      path:'/'
    },
    {
      name:"POD",
      path:'/pod'
    },
    {
      name:"Vendor",
      path:'/vendor'
    },
    {
      name:"User",
      path:'/'
    },
  ]

  return (
    <>
    <div className='header-dashboard'>
    <div className='header'>
      <nav className='navbar'>
      {nav_items.map((item,index)=>(
            <Link to={item.path}
            key={index}
            className={`link ${activeLink === index ? 'active' : ''}`}
            onClick={() => handleLinkClick(index)}>
              <p className='link-text'>{item.name}</p>
            </Link>
          ))
        }
         <Link to='/profile' key='4' className="link" activeClassName="active">
        <p className='profile-name'><FaUserCircle /> Freight EG <IoMdArrowDropdown /></p>
        </Link>
      </nav>
    </div>
    {<Dashboard/>}
    </div>
    </>
  )
}

export default Header;
