import React from 'react';
import "./RegisterPage.css";
import RegisterComponent from "../../Components/RegisterComponent/RegisterComponent";
import BackHomeComponent from '../../Components/BackHomeComponent/BackHomeComponent';



const RegisterPage = () =>
{
    return(
        <div> 
            <div className="RegisterFormContainer">
              <BackHomeComponent/>
              <RegisterComponent />
            </div> 
        </div> 

    )
}

export default RegisterPage;