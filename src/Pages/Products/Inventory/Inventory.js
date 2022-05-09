import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ product }) => {
    const { id, name, stock, img, quantity, price, seller } = product;
    const navigate = useNavigate();

    const handleDeleteProduct = id => {
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
                        <p>Quantity:{quantity} </p>
                        <p>Supplier Name: {seller} </p>
                    </Card.Text>
                    <button onClick={() => handleDeleteProduct(id)} className='btn btn-primary'>Delete Stock</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Inventory;