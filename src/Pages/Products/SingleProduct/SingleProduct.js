import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const { productId } = useParams();


    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/productdetails/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <h2>Single Products: {productId}</h2>
            <h2>Name: {product.name}</h2>
        </div>
    );
};

export default SingleProduct;