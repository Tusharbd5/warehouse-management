import React, { useEffect, useState } from 'react';
import Item from '../../Item/Item';
import Banner from '../Banner/Banner';
import './Home.css'

const Home = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div id='inventory' className='items'>
                {
                    items.slice(0, 6).map(item => <Item key={item._id}
                        item={item}></Item>)
                }
            </div>
        </div>
    );
};

export default Home;