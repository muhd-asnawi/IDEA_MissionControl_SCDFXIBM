import React from 'react';
import {useState} from 'react';
import './Home.module.css';
// import {VideoPlayer} from './components';
import {Card} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import './Feed.module.css';
import ReactPlayer from 'react-player'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 1200,
      height: 650,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));


const Feed = () => {
    const classes = useStyles();
    const list = ["https://youtu.be/Ybbx1RzrbVI?t=196", "https://youtu.be/TB9b9fpjX2A?t=612", "https://youtu.be/XaPJ6ZD1dKM?t=298",
                "https://youtu.be/hTFf74y1ASk?t=639", "https://youtu.be/eoFY6af6l2g?t=518", "https://www.youtube.com/watch?v=mp8XBAD_9IU"];
  return (
    <div className= "main">
      <div className = "header">
          <div>
            <h1 className = "title">Mission Control</h1>
          </div>
          <div>
            <Link to = "/">
              <Button>Main Page</Button>
            </Link>
          </div>
          <div>
            <Link to = "/Livefeed">
              <Button>Live Feed</Button>
            </Link>
          </div>
          <div>
            <Link to = "/BuildingInfo">
                <Button>Building Information</Button>
            </Link>
          </div>
        <div className = "wrap">
          <h1 className = "titletext">Time Elapsed: </h1>
          <div id = "timing"> 
            <span id="minutes"></span><h1 id = "colon"> : </h1><span id="seconds"></span>
          </div>
        </div>
      </div>
      <div className = "videoplayer">
        <div className={classes.root}>
            <GridList cellHeight={180} className={classes.gridList}>
                <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
                <ListSubheader component="div">Live Feed</ListSubheader>
                </GridListTile>
                {/* One component */}
                {list.map((item) => (
                    <ReactPlayer width = {580} height = {300} url={item} />
                ))}
                {/* End of component*/}
            </GridList>
        </div>
    </div> 
    <div>

    </div>
    </div>
  );
}

export default Feed;