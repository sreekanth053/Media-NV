
import React, { useState } from 'react';
import './index.css';

const Table = () => {
  const [detailsVisible, setDetailsVisible] = useState(false);

    const data = [
    {
      bidNumberCreatedBy: "#122345678123 Sunder Yoder",
      startDate: "14/02/2024",
      startTime: "05:40 F",
      bidTimeRemaining: "7hr 20 min",
      fromCitytoCity: "Gurgaon to Mumbai",
      vehicleInfo: "Truck, 20 ft Close body. 1",
      materialWeight: "4000 Kg",
      response: "4 View results",
      assignedStaff: "Mohit 521500081204",
      details: "View Details",
      // ... other details
    },
    {
      bidNumberCreatedBy: "#122345678123 Sunder Yoder",
      startDate: "14/02/2024",
      startTime: "05:40 P",
      bidTimeRemaining: "7hr 20 min",
      fromCitytoCity: "Gurgaon to Mumbai",
      vehicleInfo: "Truck, 20 ft Close body, 1",
      materialWeight: "4000 Kg",
      response: "4 View results",
      assignedStaff: "Mohit 52506264",
      details: "View Details",
      // ... other details
    },
    {
      bidNumberCreatedBy: "#122345678123 Sunder Yoder",
      startDate: "14/02/2024",
      startTime: "05:40 P",
      bidTimeRemaining: "7hr 20 min",
      fromCitytoCity: "Gurgaon to Mumbai",
      vehicleInfo: "Truck, 20 ft Close body, 1",
      materialWeight: "4000 Kg",
      response: "4 View results",
      assignedStaff: "Mohit 52506264",
      details: "View Details",
      // ... other details
    },
    {
      bidNumberCreatedBy: "#122345678123 Sunder Yoder",
      startDate: "14/02/2024",
      startTime: "05:40 P",
      bidTimeRemaining: "7hr 20 min",
      fromCitytoCity: "Gurgaon to Mumbai",
      vehicleInfo: "Truck, 20 ft Close body, 1",
      materialWeight: "4000 Kg",
      response: "4 View results",
      assignedStaff: "Mohit 52506264",
      details: "View Details",
      // ... other details
    },
    // Add more data objects as needed
  ];

  const toggleDetails = () => {
    setDetailsVisible(!detailsVisible);
  };

  return (
    <div>
      <table className="bid-table">
        <thead>
          <tr>
            <th>S No</th>
            <th>Bid Number<br/>
              Created by</th>
            <th>Start Date & Time</th>
            <th>Bid Time Remaining</th>
            <th>From City To City</th>
            <th>Vehicle Type, Size, Body, No. of Vehicle</th>
            <th>Material Weight (in Kg)</th>
            <th>Response</th>
            <th>Assigned Staff</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bid-table-row">
              <td>{index + 1}</td>
              <td>{item.bidNumberCreatedBy}</td>
              <td>{item.startDate} {item.startTime}</td>
              <td>{item.bidTimeRemaining}</td>
              <td>{item.fromCitytoCity}</td>
              <td>{item.vehicleInfo}</td>
              <td>{item.materialWeight}</td>
              <td>{item.response}</td>
              <td>{item.assignedStaff}</td>
              <td>
                <button className='viewdetails-button' onClick={toggleDetails}>View Details</button>
                {detailsVisible && (
                  <div>
                    {/* Render dropdown data and other details here */}
                    <p>Bid No: {item.bidNumber}</p>
                    {/* ... other details */}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

