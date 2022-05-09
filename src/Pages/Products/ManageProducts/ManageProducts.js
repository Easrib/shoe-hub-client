import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Inventory from '../Inventory/Inventory';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2>All Products at Warehouse</h2>
            <div className='text-center my-2'>
                <Link to='/addproducts'><button className='btn btn-primary'>Add Products</button></Link>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    products.map(product => <Inventory
                        key={product._id}
                        product={product}
                    >
                    </Inventory>
                    )
                }

            </Row>
        </div>
    );
};

export default ManageProducts;