import React from 'react';
import './About.css';
import developer from '../../../images/developer.jpg';
import github from '../../../images/social/github.png';

const About = () => {
    return (
        <div className='container'>
            <h1 className='text-primary fw-bolder fs-1 mt-3'>About The Developer</h1>
            <div className='developer-detail'>
                <img src={developer} alt="" />
                <div>
                    <h3 style={{ color: "orange" }} className='fw-light fs-1'>Tanjim Hasan</h3>
                    <p><span style={{ color: "orange" }} className='fw-bold'>Goal: </span> I am the react developer who is the developer of this site. I have used also react router, javascript xml, firebase authentication etc. I have a little amount of knowledge about backend but very much interested to develop the backend code. Therefore my target is to reach the final destination of web development that is full stack development. I am preparing myself for that situation. I have done some of the small projects. You can check those projects from below- </p>

                    <a href="https://github.com/Tusharbd5?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <button
                            className='git-btn'><img style={{ width: '30px', height: "30px" }} src={github} alt="" />My Github Repo</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;