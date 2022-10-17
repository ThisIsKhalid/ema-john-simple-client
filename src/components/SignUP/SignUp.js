import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Sign Up</h1>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Your email' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Your password' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="confirm" placeholder='Your password' required/>
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p>Already have an account? <Link to='/login'>Log In</Link></p>
        </div>
    );
};

export default SignUp;