import React from 'react';
import Iframe from 'react-iframe'

class Recommended_2 extends React.Component{

    render(){
        return(
            <Iframe url="http://www.ohiohumanities.org/what-type-of-contemporary-feminism-are-you/"
                    width="100%"
                    height="1500px"
                    id="article"
                    className="myClassname"
                    display="initial"
                    position="relative"/>
        )
    }
}

export default Recommended_2;