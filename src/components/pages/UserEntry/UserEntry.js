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
            const url = `http://localhost:5000/user-entry?email=${email}`;
            const { data } = await axios.get(url);
            setEntry(data);
        }
        getEntry();

    }, [])
    return (
        <div>
            <h1>This is Users entry {entry.length}</h1>
        </div>
    );
};

export default UserEntry;