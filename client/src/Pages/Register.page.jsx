import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Logo from '../Components/logo.component'
import './Register.scss'

const Register = () => {

    const navigate = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();

        const form = e.target;
        const user = {
            email: form.email.value,
            password: form.password.value,
            createdAt: new Date(),
        }

        console.log(user)

        fetch('/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user),
        }).then(response => { 
            if (response.status === 201) {
                navigate('/')
            }
        })
    }

    return (
        <div id="register" className="default-container">
           <Logo />
            <h1>Register</h1>

            <form onSubmit={event => handleRegister(event)}>
                <div className="form-group">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>

                    <button type="submit">Register</button>


                </div>
            </form>
            <p>Already have an account? <a href="/auth">Sign in</a></p>
        </div>
    )
}

export default Register;