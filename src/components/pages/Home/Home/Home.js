import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../../hooks/useProducts';
import Item from '../../Item/Item';
import Advertise from '../Advertise/Advertise';
import Banner from '../Banner/Banner';
import './Home.css'

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
            <Link className='link text-primary' to="/manage-inventory">Manage Inventories</Link>

            <Advertise></Advertise>
        </div>
    );
};

export default Home;