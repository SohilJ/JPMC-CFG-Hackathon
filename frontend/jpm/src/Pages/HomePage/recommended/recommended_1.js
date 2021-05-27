import React from 'react';
import Iframe from 'react-iframe'

class Recommended_1 extends React.Component{

    render(){
        return(
            <Iframe url="http://www.ohiohumanities.org/memoirs-of-american-heritage/"
                    width="100%"
                    height="1500px"
                    id="article"
                    className="myClassname"
                    display="initial"
                    position="relative"/>
        )
    }
}

export default Recommended_1;