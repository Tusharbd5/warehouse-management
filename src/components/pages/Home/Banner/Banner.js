import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../../images/banner-1.jpg';
import banner2 from '../../../../images/banner-2.jpg';
import banner3 from '../../../../images/banner-3.jpg';
import './Banner.css';

const Banner = () => {

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img style={{ height: "500px" }}
                        className="w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='banner-text'>
                        <button className='banner-btn'>Order Now</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "500px" }}
                        className="w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='middle-banner-text'>
                        <h3 style={{ color: 'orange' }}>The New Redmi Note 11</h3>
                        <p>Feel the power of the processor and a huge Batttery</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "500px" }}
                        className="w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className=''>
                        <h3 className='text-dark'>The Design Master</h3>
                        <p>Don't  choose the device without master design.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;