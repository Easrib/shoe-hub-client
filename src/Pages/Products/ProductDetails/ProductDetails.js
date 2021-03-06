import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const ProductDetails = ({ product }) => {

    const { _id, name, stock, img, quantity, price, seller, category } = product;
    const navigate = useNavigate();

    const handleSingleProduct = id => {
        navigate(`/productdetails/${id}`)
    }
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Name : {name}</Card.Title>
                    <Card.Text>
                        <p>Price:{price} </p>
                        <p>Descripton: {category }</p>
                        <p>Quantity:{quantity} </p>
                        <p>Supplier Name: {seller} </p>
                    </Card.Text>
                    <button onClick={() => handleSingleProduct(_id)} className='btn btn-primary'>Manage Stock</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ProductDetails;