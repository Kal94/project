import React from "react";
import Logo from '../Components/logo.component'
import './Auth.scss'

const Auth = () => {

    return (
        <div id="auth" className="default-container">
            <Logo />
            <h1>Sign In</h1>

            <form>
                <div className="form-group">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>

                    <button type="submit">Sign In</button>


                </div>
            </form>
            <p>Don't have an account? <a href="/register">Sign Up</a></p>
        </div>
    )
}

export default Auth;