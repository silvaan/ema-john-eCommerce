import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import './Login.css';
const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h3 className='form-title'>Login</h3>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div className="input-group">
                        <input type="submit" value="Login" className='form-btn' />
                    </div>

                </form>
                <p className='form-link'>New to Ema-john? <Link to={'/signup'}>Create a new Account</Link></p>

                <div className='line'>
                    <div className="left-line" />
                    <p>or</p>
                    <div className="right-line" />
                </div>
                <div className="google-singin">
                    <p><FcGoogle size={22} /><span>Continue With Google</span></p>
                </div>
            </div>

        </div>
    );
};

export default Login;