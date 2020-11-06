import React, { useState }  from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

export default function Login() {
    const [login, setLogin] = useState({
        username: '',
        password: ''
    });

    const history = useHistory();

    const handleChange = e => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    };

    const submitForm = e => {
        e.preventDefault();
        axios
        .post('http://localhost:5000/api/login', login)
        .then((res) => {
            localStorage.setItem("token", res.data.payload);
            history.push("/home")
        })
        .catch((err) => {
            console.log(`Error: `, err)
            alert(`Please use "Lambda School" as userName and "i<3Lambd4" as password, Thank you!`)
        });
    };

    return(
        <div className="form">
            <form  onSubmit={ submitForm }>
                <input
                    className="Log-in"
                    type="text"
                    name="username"
                    value={ login.username }
                    onChange={ handleChange }
                />
                <input
                    className="Log-in"
                    type="password"
                    name="password"
                    value={ login.password }
                    onChange={ handleChange }
                />
                <button>Log In</button>
            </form>
        </div>
    );
};