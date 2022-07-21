import React from 'react';
import './LogIn.css';

const LogIn = () => {
    return (
        <div className='login'>
            <div className="login_wrapper">
                <div className="login_cardBody">
                    <h4>Sign in</h4>
                    <form action="#">
                        <div className='login_item'>
                            <input className="form_controls" placeholder="Username or email" type="text" />
                        </div>
                        <div className='login_item'>
                            <input className="form_controls" placeholder="Username or email" type="password" />
                        </div>
                        <div className='login_item forgot_password'>
                            <label>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label style={{ marginLeft: '5px' }} for="vehicle1">Remember</label>
                            </label>
                            <a href="/#">Forgot password?</a>
                        </div>
                        <div className='login_item forgot_password'>
                            <button>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogIn