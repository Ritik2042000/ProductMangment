import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart } from '../Redux/slices/cartSlice';

import { toast } from 'react-toastify';


const ProductList = () => {

    const products = useSelector(state => state.product)
    const dispatch = useDispatch()
    console.log(products);

    // add To cart Product
    const addToCart = (data) => {
        dispatch(addtocart(data))
        toast.success(`${data.name} is Added to Cart`,{
            position:'bottom-right',
            autoClose:1100
        })
    }
    
    return (
        <>
            <Navbar />
            <div className='container'>
                <h1>Product Lists</h1>
                <div className="d-flex flex-wrap">
                    {
                        products.map((data) => {
                            return <div className=" w-33" key={data.id}>
                                <div className="card m-2">
                                    <div className="card-body">
                                        <h3>{data.name}</h3>
                                        <p>Qty : {data.qty}</p>
                                        <p>Price: ₹{data.price}</p>
                                        <button className='btn btn-primary' onClick={() => addToCart(data)} disabled={data.qty < 1}>Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>

            </div>
        </>
    );
};

export default ProductList;