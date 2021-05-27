import React, { useState } from 'react';
import "./LogInComponent.css";
import { Link } from 'react-router-dom';
import { Alert } from 'bootstrap';

const LogInComponent = () => {
    const [Username, setUsername] = useState("");
    const [Psword, setPassword] = useState("");
    
    return (
        <div className="loginContainer">
            <div>
                <h1> Login </h1>

                <form className="loginForm">

                    <label for="username">Username</label>
                    <input  onChange={(event) => {
                        setUsername(event.target.value);
                        }
                    } type="text" name="username" required></input>

                    <label for="pwd">Password</label>
                    <input onChange={(event) => {
                            setPassword(event.target.value);
                        }
                    } type="password" id="pwd" name="pwd" required></input>

                    <button type="button" onClick={function() {
                        const data = {Username: Username, Psword : Psword};
                        console.log(JSON.stringify(data));

                        const response = fetch('http://localhost/team-17/backend/login.php', {
                            method: 'POST',
                            headers: {
                                'Content-Type' : 'application/json',
                            },
                            body: JSON.stringify(data)
                        })
                        .then(response => response.json())
                        .then(data => {
                            console.log('Success:', data);
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                        });

                    }}> Login </button>

                    <Link to="/Register">
                        <a className="register">Click here to register</a>
                    </Link>

                </form>
            </div>
        </div>
    )
}



export default LogInComponent;