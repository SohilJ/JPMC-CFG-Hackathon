import React from 'react';
//import Sidebar from 'react-sidebar';
import Podcast from './podcast.js';
import { Redirect } from 'react-router-dom'
//import Test from '../test.js';
import { Link } from 'react-router-dom';


class Static extends React.Component {

    render() {
        return (

            <div>
            
            <div class="jumbotron">
                
  <h1 class="display-4">Podcasts</h1>
  <p class="lead">Click the button below to view our Podcasts for the week!</p>
  <hr class="my-4"/>
  <p>Check out this weeks topic on American Identity, Podcast #3</p>

  <Link to="/Podcast">
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Podcasts</a>
  </p>
  </Link>
</div>

<div class="jumbotron">
  <h1 class= "display-4">Pathways</h1>
  <p class="lead">Click the button to view external resources on the site!</p>
  <hr class="my-4"/>
  <p>Check out our E-Journals and other articles, from this week</p>
  <Link to="/external">
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Pathways</a>
  </p>
  </Link>
</div>

</div>
        );
    }
}
export default Static;
