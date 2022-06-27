import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faMicrochip, faBuildingShield, faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const Services = () => {
    return (
        <div className='services container'>
            <div className='service'>
                <FontAwesomeIcon className='icon' icon={faMicrochip}></FontAwesomeIcon>

                <h2>Leatest Technology</h2>
                <p>Here implemented the leatest Technology. We are going to import some new featured smartphones of leatest technology.</p>
            </div>
            <div className='service'>
                <FontAwesomeIcon className='icon' icon={faBuildingShield}></FontAwesomeIcon>

                <h2>Safe and Insured</h2>
                <p>We have the leatest smartphone of interesting features. Each phones having smart insurance and the security of fund.</p>
            </div>
            <div className='service'>
                <FontAwesomeIcon className='icon' icon={faBusinessTime}></FontAwesomeIcon>

                <h2>Timely Delivery</h2>
                <p>We are well knowned for timely delivery. If you ordered any smartphone of different brand then we will stock those products as soon as possible.</p>
            </div>
        </div>
    );
};

export default Services;