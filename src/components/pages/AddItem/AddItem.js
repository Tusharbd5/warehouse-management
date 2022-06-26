import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddItem = () => {
    const { register } = useForm();

    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const img = event.target.img.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;

        const product = { name, img, description, price, quantity };

        // Send data to server

        fetch('http://localhost:5000/product', {
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

        console.log(description);
    };
    return (
        <div>
            <form className='mt-5' onSubmit={handleSubmit}>
                <input className='mb-3 w-50' {...register("name", { required: true })} placeholder='Product name' /> <br />

                <input className='mb-3 w-50' {...register("img", { required: true })} placeholder='Image Link' /> <br />

                <input style={{ height: 'calc(2.5em + 4.75rem + 2px)' }} className='mb-3 w-50' {...register("description")} placeholder='Description' /> <br />

                <input className='mb-3 w-50' type="number" {...register("price")} placeholder="Price" /> <br />

                <input className='mb-3 w-50' type="number" {...register("quantity")} placeholder="Quantity" /> <br />
                <input className='btn btn-dark' type="submit" />
            </form>
        </div>
    );
};

export default AddItem;