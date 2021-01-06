import React from 'react';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import ChatScreen from './ChatScreen';
import Chats from './Chats';
import {
  BrowserRouter as Router, Route, Switch,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path = "/chat/:person">
            <Header backButton = "/chat" />
            <ChatScreen/>
            </Route>

            <Route path = "/chat">
            <Header backButton = "/" />
              <Chats/>
            </Route>
            {/* <Route path = "/learn">
            <Header backButton = "/" />
              <h1>Hi Iam at the Date School</h1>
            </Route>

            <Route path = "/forum">
            <Header backButton = "/"/>
              <h1>Hi Iam at the forum</h1>
            </Route> */}

            <Route path = "/">
            <Header/>
            <TinderCards/>
            <SwipeButtons/>
            </Route>

          </Switch>
        </Router>
    </div>
  );
}

export default App;


      {/* Date4Me cards*/}
      {/* Buttons below the date4me cards*/}
      {/* Chat Screen*/}
      {/* Individual chat screen*/}