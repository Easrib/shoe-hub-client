import React from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className='w-50 mx-auto'>
            <h2>Add New Products</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Product Name'  {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Product Description' {...register("description")} />
                <input className='mb-2' placeholder='Product Image url' {...register("image")} />
                <input className='mb-2' placeholder='Product Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Product Price' type="number" {...register("price")} />
                <input className='mb-2 btn btn-primary' placeholder='' type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;