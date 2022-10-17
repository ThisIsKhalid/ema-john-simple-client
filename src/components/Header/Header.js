import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='link'>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                {
                    user?.uid ?
                    <Link onClick={logOut}>Log Out</Link>
                    :
                    <>
                        <Link to="/signup">Sign Up</Link>
                        <Link to="/login">Log In</Link>
                    </>
                }
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
};

export default Header;