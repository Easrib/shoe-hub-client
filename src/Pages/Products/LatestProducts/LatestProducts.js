import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductDetails from '../ProductDetails/ProductDetails';

const LatestProducts = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://enigmatic-gorge-78786.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h2 className='text-center'>Latest <span className='text-danger'>Products</span></h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    products.slice(0, 6).map(product => <ProductDetails
                        key={product.id}
                        product={product}>

                    </ProductDetails>)
                }
            </Row>
            <div className='text-center my-2'>
                <Link to='/manageproducts'><button className='btn btn-primary'>Manage Inventories</button></Link>
            </div>
        </div>
    );
};

export default LatestProducts;