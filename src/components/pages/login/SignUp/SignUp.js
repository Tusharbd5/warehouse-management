import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import { Form, Button } from 'react-bootstrap';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../shared/Loading/Loading';

const SignUp = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });



    const [updateProfile, updating, profileError] = useUpdateProfile(auth);

    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleRegister = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const name = nameRef.current.value;


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

    }
    if (loading) {
        return <Loading></Loading>
    }

    const navigateToLogin = () => {
        navigate('/login');
    }
    if (user) {
        navigate(from, { replace: true });
    }

    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    return (
        <div className='container w-50'>
            <h1 className='text-primary mt-2 mb-4'>Sign Up</h1>

            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                {errorElement}
                <Button className='w-50 fs-5' variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
            <p className='mt-2 fs-6'>Already Have An Account? <span style={{ cursor: "pointer" }} className='text-primary' onClick={navigateToLogin}>Please Login</span></p>

            <SocialLogin></SocialLogin>
        </div>

    );
};

export default SignUp;