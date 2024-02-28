import './App.css';
// import Header from './components/Header'
// import Navbar from './components/Navbar/Navbar';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Bid from './components/Pages/Bid';
import POD from './components/Pages/POD';
import Vendor from './components/Pages/Vendor';
import User from './components/Pages/User';
import Settings from './components/Pages/Settings';
import Profile from './components/Pages/Profile';
import ContactUs from './components/Pages/ContactUs';



function App() {
  return (
    <>
    <Router>
    {/* <Header/> */}
    <Sidebar>
      <Routes>
        <Route path='/' Component={Bid}/>
        <Route path='/pod' Component={POD}/>
        <Route path='/vendor' Component={Vendor}/>
        <Route path='/user' Component={User}/>
        <Route path='/settings' Component={Settings}/>
        <Route path='/profile' Component={Profile}/>
        <Route path='/contactus' Component={ContactUs}/>
      </Routes>
    </Sidebar>
    </Router>
    </>
  );
}

export default App;
