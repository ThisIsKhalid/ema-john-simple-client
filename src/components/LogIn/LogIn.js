import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css'

const LogIn = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Your email' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Your password' required/>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New to Ema-John <Link to='/signup'>Create a new account</Link></p>
        </div>
    );
};

export default LogIn;