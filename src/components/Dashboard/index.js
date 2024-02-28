import React from 'react';
import './index.css';
import Bid from '../Pages/Bid';
import { FaFilter } from "react-icons/fa";
import { FaPlusSquare } from 'react-icons/fa';

function Dashboard() {
  return (
    <div className='dashboard'>
      <div className='dashboard-container'>
        <div className='container-items-1'>
          <div className='heading-items'>
            <p className='dashboard-headings heading'>Live</p>
            <p className='dashboard-headings'>Result</p>
            <p className='dashboard-headings'>History</p>
            <input type='text' className='searchname' placeholder={`Search `} />
          </div>
          <div className='button-create'>
            <button type='button' className='create-button'>
              Create <FaPlusSquare />
            </button>
          </div>
        </div>
      </div>
      <div className='table-content'>
        <div className='table-headings'>
          <div className='headings-1'>
            <p className='table-heading-1 table-heading'>Live (30)</p>
            <p className='table-heading-2 table-heading'>Responded (30)</p>
            <p className='table-heading-3 table-heading'>Unresponded (30)</p>
          </div>
          <div className='headings-2'>
            <p className='table-heading table-heading-5'>Bid Created</p>
            <p className='table-heading table-heading-6'>Today</p>
            <p className='table-heading table-heading-7'>Yesterday</p>
            <select className='selections'>
              <option>Calendar</option>
            </select>
            <p className='filter-logo'><FaFilter /></p>
          </div>
        </div>
        <div className='table'>
          <Bid />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
