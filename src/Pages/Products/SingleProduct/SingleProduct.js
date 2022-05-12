import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const SingleProduct = () => {
    const { productId } = useParams();



    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`https://enigmatic-gorge-78786.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleStock = (event) => {
        event.preventDefault();
        const restock = event.target.restock.value;
        const updatedStock = { restock }
        const url = `https://enigmatic-gorge-78786.herokuapp.com/products/${productId}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStock)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert('Product Added')
                event.target.reset()
            })
    }
    return (
        <div>
            <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>ID : {productId}</Card.Title>
                    <p>Name: {product.name}</p>
                    <p>Description: {product.category}</p>
                    <p>Price: {product.price}</p>
                    <p>Quantity: {product.quantity}</p>
                    <p>Supplier: {product.seller}</p>
                    <p>Sold: {product.stock}</p>
                    <button className='btn btn-primary w-50 mb-2' >Delivered</button>
                    <form >
                        <input className='w-50' type="number" name="restock" id="" />
                        <button onClick={handleStock()} className='btn btn-primary ms-2' type='submit'>Restock</button>
                    </form>
                </Card.Body>
            </Card>


            <div className='text-center my-2'>
                <Link to='/manageproducts'><button className='btn btn-primary'>Manage Inventories</button></Link>
            </div>
        </div>

    );
};

export default SingleProduct;