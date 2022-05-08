import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ProductDetails from '../ProductDetails/ProductDetails';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2>All Products at Warehouse</h2>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    products.map(product => <ProductDetails
                        key={product.id}
                        product={product}>

                    </ProductDetails>)
                }
            </Row>
        </div>
    );
};

export default ManageProducts;