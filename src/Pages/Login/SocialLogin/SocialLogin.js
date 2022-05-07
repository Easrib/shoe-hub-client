import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../images/icon/google.png'
import './SocialLogin.css'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorMessage;
    if (error) {
        errorMessage =
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='p-2 mt-2 px-2 '>Or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorMessage}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info d-block mx-auto w-50'> <img className='google-icon' src={google} alt="" /> Google Sign in</button>
            </div>

        </div>
    );
};

export default SocialLogin;