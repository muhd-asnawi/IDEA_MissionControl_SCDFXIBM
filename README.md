# IDEA_MissionControl_SCDFXIBM

### Team Information
Team Name: Idea

Members:
- Jones Lim
- Kishen Ashok Kumar
- Rishabh Paliwal
- Muhammad Asnawi bin Wahid
- Rahul Datta 

## 1. Problem Statement & Solution
Leveraging IOT to help commanders on the ground improve their command and control and help them make better decisions.

During large-scale operations where decisions need to be made almost instantaneously, the staging crew need to have a holistic understanding of the crew and the situation at hand in order to make the best decisions possible.

Currently, the staging crew’s understanding of the situation at hand is often left to manual means or direct and frequent communication with firefighters engaged in the danger zone. Manual recording of firefighter movement in and out of the danger zone might lead to clerical errors. Also, direct communication diverts the firefighters’ attention from the task at hand and may compromise their personal safety and efficiency in getting the job done. Our team proposes an end-to-end solution called Mission Control that encompasses a slew of wearables for crew members and as well as accompanying software. Information will be collected from our wearables, FASTpods (earbuds) and FASTband (wristband). The information collected will be passed to FAST (Firefighting Analysis Staging Tool), a dashboard for the staging crew for details of the situation on hand. Furthermore, vital information can be personalized to each firefighter by collecting their biometrics during their training phases via the wristbands. This will give the staging crew a better understanding of each individual’s personal health and tolerance levels, so that they can make a decision on whether the firefighter should evacuate the danger zone.

## 2. PITCH:
https://youtu.be/GARB-vDHS7Y

## 3. Architecture
![alt text](https://github.com/KishenKumarrrrr/IDEA_MissionControl_SCDFXIBM/blob/readme/archi.png?raw=true)

## 4. Detailed Solution
https://docs.google.com/document/d/1vaHihtZk1bkRmhXWnUEA3x1svw3zeWIGHPECcQrVoWE/edit?usp=sharing

## 5. Proposed timeline
We propose a 3 step implementation:

- 1. Testing on new recruits and trainees: this is in order to test if the systems function and if they can easily be adopted by new members of the force
- 2. Testing with operational personnel: after it is established that the system works without bugs and failures, it can be tested on more experienced operational personnel who can spot potential pitfalls and issues that trainees cannot due to their experience.
- 3. Finally, a phased go-live. The SCDF can adopt the technology slowly across units based on budgeting and which units would benefit the most from an advanced system like Mission Control based on the volume and complexity of operations that are commonly carried out by the respective units.

## 6.Getting Started (Step by step instructions)

Before you begin:
- Step 1: Head to the Watson IoT Platform service page on IBM Cloud and sign up / login to your IBM Cloud account.

- Step 2: Click the “Create” button on the bottom right corner of the page

![alt text](https://github.com/KishenKumarrrrr/IDEA_MissionControl_SCDFXIBM/blob/readme/Create.png?raw=true)

- Step 3: Click “Launch” to enter the Watson IoT Platform

![alt text](https://github.com/KishenKumarrrrr/IDEA_MissionControl_SCDFXIBM/blob/readme/Launch.png?raw=true)


- Step 4: From the main navigation pane, select Settings.

![alt text](https://github.com/KishenKumarrrrr/IDEA_MissionControl_SCDFXIBM/blob/readme/Settings.png?raw=true)

- Step 5: In the Data and Devices section, activate the device simulator. Simulating Devices as well as the Last Event Cache (LEC) and set it to “1 day”

![alt text](https://github.com/KishenKumarrrrr/IDEA_MissionControl_SCDFXIBM/blob/readme/Device-Sim.png?raw=true)
![alt text](https://github.com/KishenKumarrrrr/IDEA_MissionControl_SCDFXIBM/blob/readme/Last-Event-Cache.png?raw=true)

- Step 6: From the Watson IoT Platform dashboard, click the "0 Simulations running" message.

![alt text](https://github.com/KishenKumarrrrr/IDEA_MissionControl_SCDFXIBM/blob/readme/0Sim.png?raw=true)

- Step 7: Click the “Import/Export simulation” button and import from this file then select “Replace current configuration”.

![alt text](https://github.com/KishenKumarrrrr/IDEA_MissionControl_SCDFXIBM/blob/readme/Import-Export.png?raw=true)

- Step 8: After importing the simulation, in the same pop-up menu, flip the two switches on the right hand side to start the simulation.

![alt text](https://github.com/KishenKumarrrrr/IDEA_MissionControl_SCDFXIBM/blob/readme/Start.png?raw=true)

### Setting up ReactJS and NodeJS
- Step 1: Install NodeJS following this step-by-step guide.
- Step 2: Install and run ReactJS using this guide.
- Step 3: Download the project files from this github repo and paste them into the “my-app” folder created during the previous step
- Step 4: Open up your terminal in the “my-app” project folder then run the following command to install the project dependencies
```
npm install @material-ui/core @material-ui/icons axios chart.js chartjs-plugin-datalabels install react-chartjs-2 react-player react-router react-virtualized react-window redux video-react
```
- Step 5: Type npm start in the terminal to run the React app which should automatically open your browser to the web address http://localhost:3000 where you will be able to see the Dashboard!

## 7. Live Demo
https://youtu.be/5pQfqDc3Ufk

## 8. Technologies Used:

- Hardware
    * Wristband (FASTband)
    * Earbuds (FASTpods)
    * Bluetooth Beacon
    * On-helmet camera
- IBM Watson IOT Platform
- ReactJS (FAST Dashboard)
