import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductDetails = ({ product }) => {

    const { id, name, stock, img, quantity, price, seller } = product;
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Name : {name}</Card.Title>
                    <Card.Text>
                        <p>Price:{price} </p>
                        <p>Quantity:{quantity} </p>
                        <p>Supplier Name: {seller} </p>
                    </Card.Text>
                    <Link to='/singleproduct/:productId'><button className='btn btn-primary'>Manage Stock</button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductDetails;