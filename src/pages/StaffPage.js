import React, { useState } from 'react';
import StaffRow from '../components/StaffRow.js';



function StaffPage(){
    const [results, setResults] = useState([]);
    
    const fetchStaff = () => {
        fetch('https://randomuser.me/api/?results=10')
            .then (response => response.json())
            .then (response => {
                setResults(response.results);
            })
            .catch(() => {
                alert("The Random Person API is not responding")
            });
        };

    return (
        <>
            <h2>Staff</h2>
            <h4>This button will add ten randomly generated staff members to the table below using randomuser.me API.</h4>
            <button type="submit" onClick={fetchStaff}>Add Ten Staff Members</button>
            
            <article>
            <table id = "staff">
                <caption><h3>Staff</h3></caption>
                <thead>
                  <tr>
                      <th>Portrait</th>
                      <th>Name/Email</th>
                      <th>Telephone</th>
                      <th>City</th>
                  </tr>
                </thead>
                <tbody>
                    {results.map((person, index) => <StaffRow person={person} key={index} />)}
                </tbody>
              </table>
            </article>
        </>
    );
}

export default StaffPage;

