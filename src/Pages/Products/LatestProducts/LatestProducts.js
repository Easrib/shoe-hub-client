import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ProductDetails from '../ProductDetails/ProductDetails';

const LatestProducts = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h2>Latest Products</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
            {
                            products.slice(0, 6).map(product => <ProductDetails
                                key={product.id}
                                product={product}>

                            </ProductDetails>)
                        }
            </Row>
        </div>
    );
};

export default LatestProducts;