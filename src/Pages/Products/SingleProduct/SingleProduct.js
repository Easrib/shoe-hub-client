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
            <form>
                <input type="number" name="number" id="" />
                <button className='btn btn-primary ms-2' type='submit'>Restock</button>
            </form>
        </div>
    );
};

export default SingleProduct;