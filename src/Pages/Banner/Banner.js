import React from 'react';
import banner1 from '../../images/banner/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner_img'>
            <img className='w-100' src={banner1} alt="" />
        </div>
    );
};

export default Banner;