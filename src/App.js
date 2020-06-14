import React from 'react';
import {useState} from 'react';
import './App.css';
import {Card} from '@material-ui/core';
import Home from './Home.js';
import Feed from './Feed.js';
import BuildingInfo from './BuildingInfo.js';
import {Browser, Link, Route} from "react-router-dom";


class App extends React.Component {

  render() {
    return (
      <div className= "main">
        <Route exact path ="/" component = {Home} />
        <Route exact path = "/livefeed" component = {Feed} />
        <Route exact path = "/Buildinginfo" component = {BuildingInfo} />
      </div>
    )
  }

}

export default App;
