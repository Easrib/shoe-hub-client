import React from 'react';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='bg-dark p-4 mx-auto text-white text-center mt-2'>
            <h4>Crafted with <span className='text-danger'>&hearts;</span> by Sharik</h4>
            <h6> Copyright &copy; {year} </h6>
        </div>
    );
};

export default Footer;