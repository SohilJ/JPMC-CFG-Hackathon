import React from 'react';
import "./LogInPage.css";
import LogInComponent from "../../Components/LogInComponent/LogInComponent";
import BackHomeComponent from '../../Components/BackHomeComponent/BackHomeComponent';



const LogInPage = () =>
{
    return(
        <div> 
            <div className="loginComponentContainer">
              <BackHomeComponent/>
              <LogInComponent/>
            </div> 
        </div> 

    )
}

export default LogInPage;