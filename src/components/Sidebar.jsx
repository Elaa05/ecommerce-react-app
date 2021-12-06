import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
    return (
        <>
            <div class="mobile-nav">
                <div class="amado-navbar-brand">
                    <a href="index.html"><img src="img/core-img/logo.png" alt="" /></a>
                </div>

                <div class="amado-navbar-toggler">
                    <span></span><span></span><span></span>
                </div>
            </div>

            <header className="header-area clearfix">
                {/* Close Icon */}
                <div className="nav-close">
                    <i className="fa fa-close" aria-hidden="true" />
                </div>
                {/* Logo */}
                <div className="logo">
                    <a href="index.html"><img src="img/core-img/logo.png" alt /></a>
                </div>
                {/* Amado Nav */}
                <nav className="amado-nav">
                    <ul>
                        <li className="active"><a href="index.html">Home</a></li>
                        <li><a href="shop.html">Shop</a></li>
                        <li><a href="product-details.html">Product</a></li>
                        <li><a href="cart.html">Cart</a></li>
                        <li><a href="checkout.html">Checkout</a></li>
                    </ul>
                </nav>
                {/* Button Group */}
                <div className="amado-btn-group mt-30 mb-100">
                    <Link to='/login' style={{ color: 'white' }} ><a className="btn amado-btn mb-15">Login</a></Link>
                    <a href="/" className="btn amado-btn mb-15">Logout</a>
                    <Link to='/register' style={{ color: 'white' }}  > <a className="btn amado-btn active"> Register</a></Link>
                </div>
                {/* Cart Menu */}
                <div className="cart-fav-search mb-100">
                    <a href="cart.html" className="cart-nav"><img src="img/core-img/cart.png" alt /> Cart <span>(0)</span></a>
                    <a href="#" className="fav-nav"><img src="img/core-img/favorites.png" alt /> Favourite</a>
                    <a href="#" className="search-nav"><img src="img/core-img/search.png" alt /> Search</a>
                </div>
                {/* Social Button */}
                <div className="social-info d-flex justify-content-between">
                    <a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a>
                    <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
                    <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
                    <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
                </div>
            </header>
        </>
    )
}

export default Sidebar