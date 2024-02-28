import React,{useState} from 'react';
import './index.css';
import Header from '../Header';
import { CiGrid42 } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Sidebar() {

  const [activeLink, setActiveLink] = useState(null);
  const [activateLink,setActivateLink]=useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  const handleLinkClickOn=(index)=>{
    setActivateLink(index);
  }

  const menuItems_1 = [
    {
      path: "/",
      name: "Bid",
      icon: <CiGrid42 />
    },
    {
      path: "/pod",
      name: "POD",
      icon: <CiGrid42 />
    },
    {
      path: "/vendor",
      name: "Vendor",
      icon: <CiGrid42 />
    },
    {
      path: "/user",
      name: "User",
      icon: <CiGrid42 />
    }
  ];

  const menuItems_2 = [
    {
      path: "/settings",
      name: "Settings",
      icon: <CiGrid42 />
    },
    {
      path: "/profile",
      name: "Profile",
      icon: <CiGrid42 />
    },
    {
      path: "/contactus",
      name: "ContactUs",
      icon: <CiGrid42 />
    },
    {
      path: "/login",
      name: "Logout",
      icon: <CiGrid42 />
    }
  ];


  return (
    <>
      <div className='sidebar_navbar'>
        <div className='sidebar-container'>
            <div className='top-section'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFwJafaoWoUyI-3w574HoWdg7q5VW1VbN5lSsbgHew6A5YVZmQQ2y3gAu0y5Fd2GYM8YU&usqp=CAU" alt="avatar" className='logo' />
              <h1 className='logo-heding'>LOGO</h1>
            </div>
            <div className='sidebar-1'>
            {menuItems_1.map((item, index) => (
              <Link to={item.path}
              key={index}
              className={`link-1 ${activeLink === index ? 'active' : ''}`}
              onClick={() => handleLinkClick(index)}>
                {/* <p className='link_text'>{item.icon}</p> */}
                <p className='link_text'>{item.icon} {item.name}</p>
              </Link>
            ))}
          </div>
          <div className='sidebar-2'>
          {menuItems_2.map((item, index) => (
            <Link to={item.path}
            key={index}
            className={`link-1 ${activateLink === index ? 'active' : ''}`}
            onClick={() => handleLinkClickOn(index)}>
              {/* <p className='link_text'>{item.icon}</p> */}
              <p className='link_text'>{item.icon} {item.name}</p>
            </Link>
          ))}
          </div>
        </div>
        {<Header/>}
      </div>
      
    </>
  );
}

export default Sidebar;
