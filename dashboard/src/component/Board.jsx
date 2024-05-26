import React, { useState } from 'react';
import './Board.css';
import down from '../assets/down.png';
import up from '../assets/arrow-up.png';
import RakeshImage from '../assets/Rakesh.jpg';
import AnkitaImages from '../assets/ankitaimage.jpg';
import sarahImage from '../assets/sarahimage.jpg';
import harshaImage from '../assets/harsh.jpg';
import Rank1 from '../assets/quality.png';
import Rank2 from '../assets/second-rank.png';
import Rank3 from '../assets/3rd-place.png';
function Board() {
  const [employees, setEmployees] = useState([
    { rank: 1,image1:Rank1, image0: RakeshImage, name: 'Rakesh Sharma', designation: 'UI/UX Designer', hoursWorked: '7(24)', image: up, changes: '1.5 hrs' },
    { rank: 2, image1:Rank2,image0: AnkitaImages, name: 'Ankita Thakur', designation: 'HR Recruiter', hoursWorked: '7(41)', image: down, changes: '1.5 hrs' },
    { rank: 3,image1:Rank3, image0: sarahImage, name: 'Sarah Yadav', designation: 'Product Manager', hoursWorked: '7(40)', image: up, changes: '1.5 hrs' },
    { rank: 4, image0: harshaImage, name: 'Harsha Shivhare', designation: 'Designer', hoursWorked: '7(37)', image: up, changes: '1.5 hrs' },
    { rank: 5, image0: AnkitaImages, name: 'Vanhi Rai', designation: 'Video Editor', hoursWorked: '7(37)', image: down, changes: '1.5 hrs' },
    { rank: 6, image0: RakeshImage, name: 'Bhanu Sharma', designation: 'Business Analyst', hoursWorked: '7(32)', image: down, changes: '1.5 hrs' },
    { rank: 8, image0: harshaImage, name: 'Sunil Yadav', designation: 'Developer', hoursWorked: '7(24)', image: up, changes: '1.5 hrs' },
    { rank: 9, image0: RakeshImage, name: 'Akash Roy', designation: 'Business Analyst', hoursWorked: '7(21)', image: down, changes: '1.5 hrs' },
    { rank: 10, image0: harshaImage, name: 'Rohit Soni', designation: 'Developer', hoursWorked: '7(20)', image: down, changes: '1.5 hrs' },
    { rank: 11, image0: RakeshImage, name: 'Suraj Chauhan', designation: 'Developer', hoursWorked: '7(18)', image: down, changes: '1.5 hrs' },
  ]);

  const getRowBackgroundColor = (rank) => {
    switch(rank) {
      case 1: return 'rgba(255, 215, 0, 0.2)'; 
      case 2: return 'rgba(192, 192, 192, 0.2)'; 
      case 3: return 'rgba(205, 127, 50, 0.2)'; 
      default: return 'white';
    }
  };

  return (
    <div className=" div container-fluid p-5" >
      <h1 className="text-center mb-5">Employees Activity Dashboard</h1>
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-9">
          <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover">
              <thead className="navs">
                <tr className="navs">
                  <th scope="col" style={{ backgroundColor: 'darkblue', color: 'white' }}>Rank</th>
                  <th scope="col" style={{ backgroundColor: 'darkblue', color: 'white' }}>Name</th>
                  <th scope="col" style={{ backgroundColor: 'darkblue', color: 'white' }}>Designation</th>
                  <th scope="col" style={{ backgroundColor: 'darkblue', color: 'white' }}>No. of hours worked</th>
                  <th scope="col" style={{ backgroundColor: 'darkblue', color: 'white' }}>Changes</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={index} style={{ backgroundColor: getRowBackgroundColor(employee.rank) }}>
                   
                    <th scope="row" data-label="Rank"><img  style={{height:'2vh'}}src={employee.image1} alt="" srcset="" />{employee.rank}</th>
                    <td className="d-flex align-items-center name-cell" data-label="Name">
                      <img src={employee.image0} alt={employee.name} className="img-fluid rounded-circle mr-3" style={{ width: '30px', height: '30px' }} />
                      {employee.name}
                    </td>
                    <td data-label="Designation">{employee.designation}</td>
                    <td data-label="No. of hours worked">{employee.hoursWorked}</td>
                    <td className="d-flex align-items-center" data-label="Changes">
                      <img src={employee.image} alt={employee.name} className="img-fluid mr-3" style={{ width: '30px', height: '30px' }} />
                      {employee.changes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-8 col-lg-3 mt-5">
          <div className="card">
            <div className="card-header">
              Employee of the Month
            </div>
            <div className="card-body text-center">
              <img style={{height: '8vh'}} src={employees[0].image0} alt="Employee of the Month" className="img-fluid rounded-circle mx-auto d-block" />
              <h5 className="card-title mt-3">{employees[0].name}</h5>
              <p className="card-text">{employees[0].designation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
