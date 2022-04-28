import React, {Fragment} from 'react';
import { Outlet, Link } from 'react-router-dom';

import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <header className="header-container">
                <div className="left-container">
                    <div className="logo">
                        <img src="static/images/logo.png" alt="hello" />
                    </div>
                    <div className="header-links">
                        <span>
                        <Link to="/">Home</Link>
                        </span>
                        <span>
                        <Link to="/PLP">Products</Link>
                        </span>
                    </div>
                </div>
                <div className="right-container">
                    <div className="header-login">
                        <div className="login-wrapper">
                            <span>
                                <Link to="/login">Sign-In</Link>
                            </span>
                            <span>
                                <Link to="/register">Register</Link>
                            </span>
                        </div>
                        <div className="cart-container">
                            <img
                                className="cart-image"
                                src="static/images/cart.svg"
                                alt="cart-icon"
                                height="30px"   
                                width="30px"
                            />
                            <div>0 Items</div> 
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;



// <div className='navbar-container'>
//                 <div className='logo'>
//                     <img src='/static/images/logo.png' />
//                 </div>
//                 <div className='nav-links-container'>
//                     <Link to='/' className='nav-link'>Home</Link>
//                     <Link to='/products' className='nav-link'>Products</Link>
//                 </div>
//                 <div className='cart-container'>
//                     <div className='options'>
//                         {/* <span>SignIn</span>
//                         <span>Register</span> */}
//                         <Link to='/login' className='nav-link'>SignIn</Link>
//                         <Link to='/register' className='nav-link'>Register</Link>
//                     </div>
//                     <div>
//                         0 items
//                     </div>
//                 </div>
//             </div>