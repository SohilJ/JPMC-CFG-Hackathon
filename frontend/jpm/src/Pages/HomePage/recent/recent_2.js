import React from 'react';
import Iframe from 'react-iframe';


class Recent_2 extends React.Component{

    render() {
        return(
            <Iframe url="http://www.ohiohumanities.org/democracywhat-is-an-american-a-conversation-with-shakila-ahmad/"
            width='1000px'
            height='1000px'
            id="article"
            className="myClassname"
            display="initial"
            position="relative"/>
        )
    }
}

export default Recent_2;