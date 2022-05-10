import React, { useEffect, useState } from 'react';
import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you confirm? ')
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    const remaining = products.filter(product=>product._id!==id);
                    setProducts(remaining)
                })

        }
    }
    return (
        <div>
            <h2>All Products at Warehouse</h2>
            <div className='text-center my-2'>
                <Link to='/addproducts'><button className='btn btn-primary'>Add Products</button></Link>
            </div>
            <Row xs={1} md={2} lg={3}>
                {
                    products.map(product =>
                        <Card>
                            <Card.Img variant="top" src={product.img} />
                            <Card.Body>
                                <Card.Title>Name : {product.name}</Card.Title>
                                <Card.Text>
                                    <p>Price:{product.price} </p>
                                    <p>Quantity:{product.quantity} </p>
                                    <p>Supplier Name: {product.seller} </p>
                                </Card.Text>
                                <button onClick={() => handleDeleteProduct(product._id)} className='btn btn-primary'>Delete Stock</button>
                            </Card.Body>
                        </Card>
                    )
                }

            </Row>
        </div>
    );
};

export default ManageProducts;