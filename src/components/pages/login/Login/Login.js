import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../../firebase.init';
import Loading from '../../shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const navigateToRegister = () => {
        navigate('/sign-up');
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            alert('Sent email');
        }
        else {
            toast("Please Enter The Email !!")
        }
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading></Loading>
    }
    let errorElement;
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    return (
        <div className='container w-50'>
            <h1 className='text-primary mt-2 mb-4'>Please Login</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                {errorElement}
                <Button className='w-50 fs-5' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <>
                <p onClick={handleResetPassword} style={{ cursor: "pointer", display: "inline-block" }} className='text-primary mt-2'>Forgot Password?</p>
                <ToastContainer />
            </>

            <p className='mt-2 fs-6'>New to X-House Management? <span style={{ cursor: "pointer" }} className='text-primary' onClick={navigateToRegister}>Please Register</span></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;