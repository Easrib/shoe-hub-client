import React from 'react';
import Banner from '../Banner/Banner';
import LatestProducts from '../Products/LatestProducts/LatestProducts';
import Subscribe from './Subscribe/Subscribe';
import Support from './Support/Support';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <LatestProducts></LatestProducts>
            <Support></Support>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;