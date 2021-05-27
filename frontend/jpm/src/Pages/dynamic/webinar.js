import React from 'react';
import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';


class Webinar extends React.Component{
    render() {
        return(
            <div>

                
<div class="jumbotron">
  <h1 class="text-center display-4">Live Broadcast</h1>
  <p class="text-center lead">Welcome to this weeks live discussion!</p>
  <hr class="my-4"></hr>
  <p class="text-center">Feel free to engage in the chat or just sit back and relax.</p>
  <p class="lead">
  </p>
</div>
                <div style={{ marginLeft: '20%'}}>
                    <TwitchEmbed
                        channel="dogdog"
                        id="dogdog"
                        allowFullScreen={true}
                        theme="dark"
                        onVideoPause={() => console.log(':(')}
                    />
                </div>
            </div>
        )
    }
}

export default Webinar;