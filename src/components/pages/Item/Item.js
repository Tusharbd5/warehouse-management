import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
    const { _id, name, description, img, price, quantity, supplier } = item;
    const navigate = useNavigate()
    const navigateItemDetails = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='item'>
            <h2>{name}</h2>
            <img className='item-img' src={img} alt="" />
            <p>{description}</p>
            <h5>Supplier: {supplier}</h5>
            <h6>Stock Quantity: {quantity}</h6>
            <p style={{ textAlign: "center" }} className='item-price'>Price: {price}$</p>

            <button onClick={() => navigateItemDetails(_id)} className='btn btn-success'>Update</button>
        </div>
    );
};

export default Item;