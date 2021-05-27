import React from 'react';
import { BrowserRouter as Router, Link, Redirect } from 'react-router-dom';

const Recent = () => {

    return (




        <div class="card-deck">

            <div class="card" style={{ maxWidth: '300px', height: '600px', margin: 'auto' }}>
                <img class="card-img-top" src="http://www.ohiohumanities.org/wp-content/uploads/2020/10/7449468090_85aaceabf7_e.jpg"  alt=" Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Conversations at Home: The Declaration of Independence</h5>
                    <p class="card-text">An Investigation of our Founding Values</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 27 mins ago</small>
                    <Link to="/recent_1">
                        <a class="btn btn-primary" role="button">See more...</a>
                    </Link>
                </div>
            </div>

            <div class="card" style={{ maxWidth: '300px', height: '600px' }}>
                <img class="card-img-top" src="http://www.ohiohumanities.org/wp-content/uploads/2020/09/Shakila_Ahmad_headshot-267x300.png" alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">Democracy: What is an American, A Conversation with Shakila Ahmad</h5>
                    <p class="card-text">Defining the Prototypical American</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 20 mins ago</small>
                    <Link to="/recent_2">
                        <a class="btn btn-primary" role="button">See more...</a>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Recent;