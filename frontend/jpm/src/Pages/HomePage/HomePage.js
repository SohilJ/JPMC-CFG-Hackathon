import React from 'react';
import { render } from 'react-dom';
import NavBar from '../NavBar/NavBar.js';
import "./HomePage.css";
import Recent from "./recent/Recent"
import Recommended from "./recommended/Recommended"

//Add <NavBar /> under HomePage className

class HomePage extends React.Component {

    render() {
        return (
            <div className="HomePage">

                <div style={{ width: '80%', height: '8%', marginLeft: '20%' }}>
                    <img
                        src="http://www.ohiohumanities.org/wp-content/themes/ohio-humanities/static/assets/images/updated_logo.png"
                        alt="logo"
                        style={{ marginTop: '5%', marginLeft: '5%' }}
                    />
                </div>

                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style={{ maxWidth: '1000px', height: '400px', margin: 'auto' }}>
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="http://www.ohiohumanities.org/wp-content/uploads/2020/05/Clifton-OA-2019.jpg" alt="First slide" />
                            
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="http://www.ohiohumanities.org/wp-content/uploads/2015/08/home-slide-3.jpg" alt="Second slide" />
                            
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="http://www.ohiohumanities.org/wp-content/uploads/2020/05/Fav-Book-2019.jpg" alt="Third slide" />
                            
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>

                <div className="row" style={{ marginTop: '5%', marginBottom: '8%' }}>
                    <div style={{ marginLeft: '15%', marginRight: '5%' }}>
                        <h1> Memories </h1>
                        <Recommended />
                    </div>
                    <div>
                        <h1> Recent Activity </h1>
                        <Recent />
                    </div>
                </div>
            </div>
        )
    }

}


export default HomePage; 