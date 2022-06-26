import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Inventory.css'

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const handleDelivered = event => {
        event.preventDefault();

        let quantity;
        let previousQuantity = product.quantity;
        quantity = previousQuantity - 1;
        if (quantity < 0) {
            navigate('/stock-out');
            window.alert('Product is out of stock')
        }
        if (quantity >= 0) {
            product.quantity = quantity;

            fetch(`http://localhost:5000/product/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(product)
            })
                .then(res => res.json())
                .then(data => {
                    toast('Product successfully delevered');
                })
        }

    }



    return (
        <div className='single-item'>
            <small className='text-success'>Product id: {product._id}</small>
            <h2>{product.name}</h2>
            <img className='mb-3 mt-3' src={product.img} alt="" />
            <h4>Price: {product.price}$</h4>
            <h6>Quantity: {product.quantity}</h6>
            <p style={{ textAlign: "center" }}>Supplier: {product.supplier}</p>
            <p>{product.description}</p>

            <button onClick={handleDelivered} className='btn btn-success'>Delivered</button>
        </div>
    );
};

export default Inventory;