import React, { useEffect, useState } from 'react';
import { Card, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyProducts = () => {
    const [products, setProducts] = useState([])
    const [user] = useAuthState(auth);

    useEffect(() => {
        const email = user.email;
        fetch(`https://enigmatic-gorge-78786.herokuapp.com/myproduct?email=${email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you confirm? ')
        if (proceed) {
            const url = `https://enigmatic-gorge-78786.herokuapp.com/myproduct/${id}`

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining)
                })

        }
    }
    return (
        <div>
            <h2 className='text-center'>My Products</h2>
            <div className='text-center my-2'>
                <Link to='/addproducts'><button className='btn btn-primary'>Add Products</button></Link>
            </div>
            <Row xs={1} md={2} lg={3}>
                {
                    products.map(product =>
                        <Card>
                            <Card.Img variant="top" src={product.image} />
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

export default MyProducts;