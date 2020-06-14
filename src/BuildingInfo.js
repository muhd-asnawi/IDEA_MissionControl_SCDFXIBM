import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import styles from './BuildingInfo.module.css';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

let building = require("./images/building.gif");


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      minHeight: 420
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  

const BuildingInfo = () => {
    const classes = useStyles();
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
      <div className = {styles.page}>
          <div className = {styles.left}>
            <img src= {building} className = {styles.building}></img>
          </div>
          <div className = {styles.right}>
            <div className = {styles.description}>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    <h1 className = {styles.righttext}>Building Name: 32 Goodman Road</h1>
                    <h1 className = {styles.righttext}>Floors: 2</h1>
                    <h1 className = {styles.righttext}>Elevation: 10m</h1>
                    <h1 className = {styles.righttext}>Target Area: 2nd Floor</h1>
                    <h1 className = {styles.righttext}>Year Constructed: 2015</h1>
                    <h1 className = {styles.righttext}>Previous Fires: 0</h1>
                    </Typography>
                </CardContent>
            </Card>
            </div>
          </div>
      </div>
    </div>
  );
}

export default BuildingInfo;