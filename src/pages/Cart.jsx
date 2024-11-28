import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem, updateQty } from '../Redux/slices/cartSlice';
import { toast } from 'react-toastify';

const Cart = () => {

    const cartProduct = useSelector(state => state.cart)
    const products = useSelector(state => state.product)
    const dispatch = useDispatch()
    const [maxQty, setMaxQty] = useState(0)
    const [total, setTotal] = useState(0)

    // for delete Product
    const handleDeleteItem = (id) => {
        const confirm = window.confirm('Are You want to delete?')
        if (confirm) {
            dispatch(removeItem(id)),
                toast.warn(`Item with id${id} Deleted`, {
                    autoClose: 1100
               })
        }
    }

    // For Change Quntity
    const handleQtyUpdate = (id, amount) => {
        const product = products.find((data) => data.id == id)
        dispatch(updateQty({ id, amount, maxQty: product.qty }))
        setMaxQty(product.qty)
    }

    useEffect(() => {
        if (cartProduct) {
            const totalPrice = cartProduct.reduce((accum, curr) => accum + (curr.price * curr.qty), 0)
            setTotal(totalPrice)
        }
    }, [handleDeleteItem, handleQtyUpdate])
    return (
        <div>
            <h1 className='text-center my-3'>Welcome To Cart</h1>
            {
                cartProduct.length < 1 ? (
                    <div className='text-center '>
                        <p>Cart Is Empty </p>
                        <Link to='/'><button className='btn btn-primary'>Go To Product List</button></Link>
                    </div>
                ) : (
                    <>
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <td>ProductName</td>
                                    <td>ProductPrice</td>
                                    <td>Qty</td>
                                    <td>RemoveItem</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartProduct.map((data) => {
                                        return <tr key={data.id}>
                                            <td>{data.name}</td>
                                            <td>₹{data.price}</td>
                                            <td>
                                                <button className='btn btn-sm btn-outline-danger mx-2' disabled={data.qty == 1} onClick={() => handleQtyUpdate(data.id, -1)}>-</button>
                                                {data.qty}
                                                <button className='btn btn-sm btn-outline-success mx-2' disabled={data.qty == maxQty} onClick={() => handleQtyUpdate(data.id, 1)}>+</button>
                                            </td>
                                            <td><button className='btn btn-danger' onClick={() => handleDeleteItem(data.id)}>Delete</button></td>
                                        </tr>
                                    })
                                }
                            </tbody>

                        </table>
                        <h3>TotalPrice : ₹{total} </h3>
                    </>
                )
            }
        </div>
    );
};

export default Cart;