import React from 'react';
import {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from './Missingcount.module.css';
import { Paper } from '@material-ui/core';
import { sizing } from '@material-ui/system';


const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "100%",
    minWidth: 100,
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

export default function Missingcount() {
  const [missing, setMissing] = useState(0);
  const [casualties, setCasualties] = useState(0);
  const classes = useStyles();

  const decreaseMissing = () => {
      setMissing(missing => missing - 1);
  }

  const increaseMissing = () => {
    setMissing(missing => missing + 1);
  }

  const decreaseCasualties = () => {
    setCasualties(missing => missing - 1);
  }

  const increaseCasualties = () => {
    setCasualties(missing => missing + 1);
  }


  return (
    <Paper elevation={1} className={classes.root}>
      <CardContent height = "100%">
          <div className = {styles.parent}>
            <h1 className = {styles.counter}>{missing}</h1>
            <h1 className = {styles.header}>Missing People</h1>
            <div className = {styles.buttons}>
                <div>
                    <Button onClick = {() => decreaseMissing()}><h1 className = {styles.buttontext}>-1</h1></Button>
                </div>
                <div>
                    <Button onClick = {() => increaseMissing()}><h1 className = {styles.buttontext}>+1</h1></Button>
                </div>
            </div>
            <h1 className = {styles.counter}>{casualties}</h1>
            <h1 className = {styles.header}>Casualties</h1>
            <div className = {styles.buttons}>
                <div>
                    <Button onClick = {() => decreaseCasualties()}><h1 className = {styles.buttontext}>-1</h1></Button>
                </div>
                <div>
                    <Button onClick = {() => increaseCasualties()}><h1 className = {styles.buttontext}>+1</h1></Button>
                </div>
            </div>
          </div>
      </CardContent>
    </Paper>
  );
}