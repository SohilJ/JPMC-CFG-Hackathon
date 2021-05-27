import React from 'react';
import { Link } from 'react-router-dom';


class Recommended extends React.Component {
    render() {
        return (
            <div class="card-deck">

                <div class="card" style={{ maxWidth: '300px', height: '600px' }}>
                    <img class="card-img-top" src="http://www.ohiohumanities.org/wp-content/uploads/2020/07/Blog_memoirs_image-268x300.jpg" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Memoirs of American Heritage, by Rob Colby</h5>
                        <p class="card-text">How we Connect to our Ancestors</p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                        <Link to="/recommended_1">
                            <a class="btn btn-primary" role="button">See more...</a>
                        </Link>
                    </div>
                </div>

                <div class="card" style={{ maxWidth: '300px', height: '600px' }}>
                    <img class="card-img-top" src="http://www.ohiohumanities.org/wp-content/uploads/2018/05/betty-friedan-3-300x169.jpg" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">In 1964, Betty Friedan published The Feminine Mystique and made waves across America. Friedan was a leading.....</h5>
                        <p class="card-text"></p>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                        <Link to="/recommended_2">
                            <a class="btn btn-primary" role="button">See more...</a>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Recommended;