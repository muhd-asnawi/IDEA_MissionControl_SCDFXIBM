import React from 'react';
import styles from './Individualinfo.module.css';
import {Oxygen, Infosummary} from "../";

export default function Individualinfo(props) {
    console.log(props);
    if (props.person == null) {
        props = {person : {pic : "default-profile.jpg", name: "None Selected", heartrate: 0, oxygen: 0, temp: 0}};
    }
    let base = require("../../images/" + props.person.pic);
    return (
        <div className = {styles.first1}>
            <div className={styles.profile}>
                <img alt = 'dp' src = {base} className = {styles.profilepic} />
                <h1 className ={styles.text}>{props.person.name}</h1>
            </div>
            <div className = {styles.bigchart}>
                <Infosummary person = {props.person}/>
            </div>
            <div className={styles.healthcon}>
                <div className = {styles.current2}>
                <h1 className ={styles.text}>Location Estimate</h1>
                </div>
                <h1 className ={styles.textinfo}>3rd Floor</h1>
                <div className = {styles.current}>
                <h1 className ={styles.text}>Medical History</h1>
                </div>
                <h1 className ={styles.textinfo}>Asthma</h1>
            </div>
        </div>
    );
}
