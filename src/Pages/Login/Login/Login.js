import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorMessage;

    if (user) {
        // navigate(from, { replace: true });
    }

    if (error) {
        errorMessage =
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('http://localhost:5000/login', { email })
        localStorage.setItem('accessToken', data.accessToken)
        navigate(from, { replace: true });
    }

    const navigateSignup = event => {
        navigate('/signup')
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Password reset mail sent');
        }
        else {
            toast('Please write your email address')
        }
    }
    return (
        <div className='container w-50 mx-auto my-4'>
            <h2 className='text-center'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            {errorMessage}
            <p>Don't Have an account? <Link to={'/signup'} className='text-danger pe-auto text-decoration-none' onClick={navigateSignup}>Please Signup!</Link></p>
            <p>Forget Password? <Link to={'/login'} className='text-danger pe-auto text-decoration-none' onClick={resetPassword}>Reset Password!</Link></p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;