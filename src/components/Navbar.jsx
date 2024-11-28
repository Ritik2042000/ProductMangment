import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="container-fluid bg-nav">
            <div className="container ">
                <nav className='navbar '>
                    <div>
                        <Link to='/'>
                            <p className='btn'>Product List</p>
                        </Link>
                    </div>
                    <div className="cart">
                        <Link to='/cart'><button className='btn btn-primart'>Cart</button></Link>
                    </div>
                </nav>

            </div>
        </div>
    );
};

export default Navbar;