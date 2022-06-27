import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const UserEntry = () => {
    const [user] = useAuthState(auth);
    const [entry, setEntry] = useState([]);
    useEffect(() => {
        const getEntry = async () => {
            const email = user.email;
            const url = `https://morning-spire-56199.herokuapp.com/user-entry?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setEntry(data);
        }
        getEntry();

    }, [user])
    return (
        <div>
            {
                entry.map(e => <div key={e._id} className='item w-50 mt-5 mb-5'>
                    <h2>{e.name}</h2>
                    <img className='item-img' src={e.img} alt="" />
                    <p>{e.description}</p>
                    <h5>Supplier: {e.supplier}</h5>
                    <h6>Stock Quantity: {e.quantity ? e.quantity : "Sold Out"}</h6>
                    <p style={{ textAlign: "center" }} className='item-price'>Price: {e.price}$</p>

                </div>)
            }
        </div>
    );
};

export default UserEntry;