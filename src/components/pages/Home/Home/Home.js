import React from 'react';
import useProducts from '../../../../hooks/useProducts';
import Item from '../../Item/Item';
import Banner from '../Banner/Banner';
import './Home.css'

const Home = () => {
    const [items] = useProducts();
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