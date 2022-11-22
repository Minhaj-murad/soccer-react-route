
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import './Signup.css';

import { AuthContext } from './UseContext';



const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation(); 
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, {replace: true})
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New to this website? <Link to='/signup' className='text-blue-800'>Create a New Account</Link></p>
        </div>
    );
};

export default Login;