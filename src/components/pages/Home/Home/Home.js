import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../../hooks/useProducts';
import Item from '../../Item/Item';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import './Home.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [items] = useProducts();
    return (
        <div>
            <Banner></Banner>
            <div style={{ marginTop: '50px', marginBottom: '40px' }} id='inventory' className='items'>
                {
                    items.slice(0, 6).map(item => <Item key={item._id}
                        item={item}></Item>)
                }
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <Link className='link text-primary' to="/manage-inventory">Manage Inventories</Link>
                <FontAwesomeIcon className='fs-1 text-primary ms-2' icon={faArrowRight}></FontAwesomeIcon>
            </div>

            <Advertise></Advertise>
        </div>
    );
};

export default Home;