import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './LogIn.css'

const LogIn = () => {

    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then( result => {
            // console.log(result.user);
            form.reset();
            // navigate('/');
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleSubmit}>
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