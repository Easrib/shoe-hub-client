import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddProducts = () => {
    const [user] = useAuthState(auth)

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = 'http://localhost:5000/myproduct'
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert('Product Added')
            })
    };
    return (
        <div className='w-50 mx-auto'>
            <h2>Add New Products</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Product Name'  {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='User Email' value={user.email}  {...register("email", { required: true })} readOnly />
                <input className='mb-2' placeholder='Product Description' {...register("description")} />
                <input className='mb-2' placeholder='Supplier Name' {...register("seller")} />
                <input className='mb-2' placeholder='Product Image url' {...register("image")} />
                <input className='mb-2' placeholder='Product Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Product Price' type="number" {...register("price")} />
                <input className='mb-2 btn btn-primary' value="Add Product" placeholder='' type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;