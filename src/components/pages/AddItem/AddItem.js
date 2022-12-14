import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const { register } = useForm();

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const img = event.target.img.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const email = user?.email;

        const product = { name, img, description, price, quantity, email };

        // Send data to server

        fetch('https://warehouse-management-jdvj.onrender.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(result => {
                toast('New Item Succesfully Inserted', result);
            })

        // Count users entry
        axios.post('https://warehouse-management-jdvj.onrender.com/user-entry', product)
            .then(response => {
                console.log('Entry Successful', response);
                event.target.reset();
            })

    };
    return (
        <div className='mb-5'>
            <form className='mt-5' onSubmit={handleSubmit}>
                <input className='mb-3 w-50' {...register("name")} placeholder='Product name' required /> <br />

                <input className='mb-3 w-50' {...register("img")} placeholder='Image Link' required /> <br />

                <input style={{ height: 'calc(2.5em + 4.75rem + 2px)' }} className='mb-3 w-50' {...register("description")} placeholder='Description' required /><br />

                <input className='mb-3 w-50' type="number" {...register("price")} placeholder="Price" /> <br />

                <input className='mb-3 w-50' type="number" {...register("quantity")} placeholder="Quantity" required /> <br />
                <input className='btn btn-dark' type="submit" />
            </form>
        </div>
    );
};

export default AddItem;