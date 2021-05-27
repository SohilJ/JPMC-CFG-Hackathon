import React, { useState } from 'react';
import "./RegisterComponent.css";
import { Link } from 'react-router-dom';

const RegisterComponent = () => {
    const [Username, setUsername] = useState("");
    const [Psword, setPassword] = useState("");
    const [First_Name, setFirstName] = useState("");
    const [Last_Name, setLastName] = useState("");
    const [Age, setAge] = useState(0);

    return (
        <div className="registerContainer RegisterFormContainer">
            <div>
                <h1> Register</h1>

                <form className="registerForm">
                    <div id="personal">

                        <label for="firstName">First Name&nbsp;</label>

                        <input onChange={(event) => {
                            setFirstName(event.target.value);
                        }} type="text" id="firstName" name="firstName" required></input>

                        <label for="lastName">Last Name&nbsp;</label>
                        <input onChange={(event) => {
                            setLastName(event.target.value);
                        }} type="text" id="lastName" name="lastName" required></input>

                        <label for="dateOfBirth">Your age ?</label>
                        <input onChange={(event) => {
                            setAge(event.target.value);
                        }} type="number" min="13" max="120" id="dateOfBirth" name="dateOfBirth"
                        required></input>
                    </div>

                    <label for="email">E-Mail Address</label>
                    <input onChange={(event) => {
                        setUsername(event.target.value);
                    }} type="text" name="email"
                    required></input>

                    <label for="pwd">Password</label>
                    <input type="password" id="pwd" name="pwd" required></input>

                    <label for="pwd">Password</label>
                    <input onChange={(event) => {
                        setPassword(event.target.value);
                    }} type="password" id="pwd" name="pwd" 
                    required></input>

                    <button onClick={function() {
                    const data = {Username : Username, Psword : Psword, First_Name : First_Name, Last_Name : Last_Name, Age : Age};
                    console.log(JSON.stringify(data));

                    const response = fetch('http://localhost/team-17/backend/create_account.php', {
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
                    }} type="button" > Register </button>

                    <Link to="/LogIn">
                        <a className="register">Click here to login </a>
                    </Link>

                </form>
            </div>
        </div>);
     }
export default RegisterComponent;