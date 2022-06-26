import React from 'react';
import './Advertise.css';
import logo from '../../../../images/addvertise-1.png';
const Advertise = () => {
    return (
        <div className='banner'>
            <img src={logo} alt="" />
            <h3>Get Ready For</h3>
            <button className=''>Comming Soon</button>

        </div>
    );
};

export default Advertise;