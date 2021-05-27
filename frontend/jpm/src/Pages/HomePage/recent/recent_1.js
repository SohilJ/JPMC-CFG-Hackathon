import React from 'react';
import Iframe from 'react-iframe'

class Recent_1 extends React.Component{

    render(){
        return(
            <Iframe url="http://www.ohiohumanities.org/conversations-at-home-the-declaration-of-independence/"
                    width="100%"
                    height="1000px"
                    id="article"
                    className="myClassname"
                    display="initial"
                    position="relative"/>
        )
    }
}

export default Recent_1;