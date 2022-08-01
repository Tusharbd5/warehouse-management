import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import useToken from '../../../../hooks/useToken';
import google from '../../../../images/social/google logo.png';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [token] = useToken(user)
    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    if (loading) {
        // return <Loading></Loading>
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    if (token) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-success opacity-50'></div>
                <p className='mt-2 mx-5'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-success opacity-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info'><img style={{ width: '30px' }} src={google} alt="" /> Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;