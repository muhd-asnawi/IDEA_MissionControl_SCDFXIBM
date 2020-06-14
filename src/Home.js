import React from 'react';
import {useState} from 'react';
import './Home.module.css';
import {Teamdisplay, Missingcount, Individualinfo, Manpower, Equipment, Alert} from './components';
import {Card} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import axios from 'axios';

let people = [{ pic : "rishabh.jpg", name : "Rishabh", heartrate : 183, boxygen : 99, temp : 37.9, timein: "918s", status: "Inside", oxygent : 90, basetemp: 37.1, baseboxygen: 95, baseoxygentank: 64, basepulse: 87}, 
          {pic : "JonesDP.jpg", name : "Jones", heartrate : 134, boxygen : 93, temp : 38, timein: "1392s", status: "Inside", oxygent : 89 ,basetemp: 36.8, baseboxygen: 99, baseoxygentank: 40, basepulse: 98}, 
          {pic : "rahul.jpg", name : "Rahul", heartrate : 136, boxygen : 97, temp : 37.2,  timein: "1320s", status: "Inside", oxygent : 92, basetemp: 37.5, baseboxygen: 98, baseoxygentank: 57, basepulse: 111},
          {pic : "Asnawi.jpg", name : "Asnawi", heartrate : 181, boxygen : 94, temp : 37.1, timein: "1620s", status: "Inside", oxygent : 95, basetemp: 37.2, baseboxygen: 99, baseoxygentank: 47, basepulse: 121},
          {pic : "kishendp.jpg", name : "Kishen", heartrate : 117, boxygen : 95, temp : 36.9, timein: "0s",  status: "Outside", oxygent : 84, basetemp: 37.9, baseboxygen: 99, baseoxygentank: 59, basepulse: 117}];

const peopleList = [];

setInterval(function changeParams() {
  people = people.map(person => { 
    let key = Math.random();
    if (person.oxygent != 0) {
      person.oxygent = person.oxygent - 1;
    }
    if (key > 0.5) {
      person.heartrate = person.heartrate + Math.floor(Math.random() * 5);
      person.boxygen = person.boxygen + Math.floor(Math.random() * 1);
      person.temp = person.temp + Math.floor(Math.random() * 1);
      person.heartrate = person.heartrate + Math.floor(Math.random() * 10);
    } else {
      person.heartrate = person.heartrate - Math.floor(Math.random() * 5);
      person.boxygen = person.boxygen - Math.floor(Math.random() * 1);
      person.temp = person.temp - Math.floor(Math.random() * 1);
      person.heartrate = person.heartrate - Math.floor(Math.random() * 10);
    }
    
    return person})
}, 5000)

const header = {
  'Authorization': 'Basic XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  'Content-Type': 'application/json',
}

async function pullData() {
let res = await axios.get("/device/types/Firefighter_Outside/devices/Firefighter_Outside_1/events", { 
  headers: header
  });
let payload = atob(res.data[0].payload);
peopleList.push(JSON.parse(payload));
}

pullData();

var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
  setInterval( function(){
      document.getElementById("seconds").innerHTML=pad(++sec%60);
      document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
 }, 1000);

const Home = () => {

  // console.log("peopleList: ");
  // setInterval(function check() {
  //   if(peopleList.length !== 0) {
  //     setPeople(peopleList);
  //   }
  // },1000)

  // const [people, setPeople] = useState(peopleList);
  const [newperson, setnewPerson] = useState(people[1]);

  function selectPerson(name) {
    const selected = people.filter(p => p.name == name);
    const newPerson = selected[0];
    setnewPerson(newPerson);
    console.log(newperson);
  }

  const manpower = (<div className ="resourcechart"><h1 className = "manpowertext">Total Manpower:</h1>
                      <div className = "donut">
                        <Manpower/>
                      </div>
                    </div>);

  const equipment = (<div className ="resourcechart"><h1 className = "manpowertext">Total Equipment:</h1>
                      <div className = "donut">
                        <Equipment/>
                      </div>
                    </div>);

  const [display, setDisplay] = useState(true);

  const changeManpower = () => {
    setDisplay(display => true);
  }

  const changeEquip = () => {
    setDisplay(display => false);
  }

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
      <div className = "container1">
        <div className = "teamdisplay">
          <Teamdisplay data = {people} select = {selectPerson}/>
        </div>
        <div className = "missionstats">
            <div className = "missing">
              <div className = "missingChart">
                <Missingcount/>
              </div>
            </div>
            <div className = "summary">
              <div className = "summaryentry">
                {display ? manpower : equipment}
              </div>
              <div className = "buttons">
                <Button onClick = {() => changeManpower()}>Manpower</Button>
                <Button onClick = {() => changeEquip()}>Equipment</Button>
              </div>
              <div className = "summaryentry2">

              </div>
            </div>
        </div>
      </div>
      <div className = "container2">
        <div className = "personalinfo">
          <Individualinfo person = {newperson} />
        </div>
        <div className = "alerts">
           <Alert data = {people}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
