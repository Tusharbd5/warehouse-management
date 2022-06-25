import React, { useEffect, useState } from 'react';

const Home = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            {
                items.map(item => <img src={item.img}></img>)
            }
        </div>
    );
};

export default Home;