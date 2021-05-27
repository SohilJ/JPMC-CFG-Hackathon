import React from 'react';

import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './Pages/NavBar/NavBar';
import Homepage from './Pages/HomePage/HomePage';
import Recommended from './Pages/HomePage/recommended/Recommended.js';
import Recent from './Pages/HomePage/recent/Recent';
import Recent_1 from './Pages/HomePage/recent/recent_1';
import Recent_2 from './Pages/HomePage/recent/recent_2';
import Recommended_1 from './Pages/HomePage/recommended/recommended_1';
import Recommended_2 from './Pages/HomePage/recommended/recommended_2';
import Podcast from './Pages/Static/podcast';
import LogInPage from './Pages/LogIn/LogInPage';
import RegisterPage from '../src/Pages/RegisterPage/RegisterPage';
import Webinar from './Pages/dynamic/webinar.js'
import Group from './Pages/dynamic/groupVideo.js';
import Static from './Pages/Static/static';


class App extends React.Component {
  
  render() {
  return ( 

    <Router>      
              <NavBar/>
                  <Route path="/Static" exact component={Static} />     
                  <Route path="/" exact component={Homepage} />
                  <Route path="/Register" component={RegisterPage}/>
                  <Route path="/recommended" exact component={withRouter(Recommended)} />
                  <Route path="/recent" exact component={withRouter(Recent)} />
                  <Route path="/recent_1" exact component={Recent_1} />
                  <Route path="/recent_2" exact component={Recent_2} />
                  <Route path="/recommended_1" exact component={Recommended_1} />
                  <Route path="/recommended_2" exact component={Recommended_2} />
                  <Route path="/webinar" exact component={Webinar} />
                  <Route path="/group" exact component={Group} />
                  <Route path="/Podcast" exact component={withRouter(Podcast)} />
                  <Route path="/LogIn" exact component={withRouter(LogInPage)} />
                  <Route path="/archives" exact component={withRouter(Static)} />
                  <Route path='/external' component={() => { window.location = 'https://digitaleditions.glpublishing.com/pathwaysfall2018/'; return null; }} />
                

    </Router>
  )
  }
}

export default App;