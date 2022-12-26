// set timer project
// using one button for both start and stop
var timeInterval;
var alarmInterval;
const timerControlBtn=()=>{ 
    if ( myTBtn.innerText == "START") {
        timeInterval= setInterval(setMyTime, 1000); 
        myTBtn.innerText = "STOP"
        myTBtn.style.backgroundColor = "red"
        myTBtn.style.color = "white" 
        
    }else if ( myTBtn.innerText == "STOP") {
        clearInterval(timeInterval)
        myTBtn.innerText = "START"
        myTBtn.style.backgroundColor = "green" 
        myTBtn.style.color = "white"  
    }
}
// alternatively using parameterizes function perform differt tasks with two seperate buttons:
// const timerControlBtn=(key)=>{
//   if (key == 1) {
//       timeInterval= setInterval(setMyTime, 1000);     
//   }else if (key == 0) {
//       clearInterval(timeInterval)
//   } 
// }

// timer function
var myDate
var day
var hrs
var min
var sec
const setMyTime = ()=>{
    myDate = new Date();
    day = myDate.toDateString();
    hrs = myDate.getHours();
    min = myDate.getMinutes();
    sec = myDate.getSeconds();
    dispDay.innerText = day
    dispTimer.innerHTML = `${hrs}<small class="fs-5">H</small>: ${min}<small class="fs-5">M</small>: ${sec}<small class="fs-5">S</small>`
}
// reset timer function
const resetTimer = ()=>{
    clearInterval(timeInterval)
    dispTimer.innerHTML = `00: 00: 00`
    myTBtn.innerText = "START"
    myTBtn.style.backgroundColor = "green" 
    myTBtn.style.color = "white" 
    // for alarm
    song.pause()
    clearInterval(alarmInterval)
    alarmBtn.innerText= "SET ALARM"
    alarmBtn.style.backgroundColor = "grey"
    alarmBtn.style.color = "white"
    alarmInpBox.style.display = "none"
    alarmNotice.style.display = "none"
}
// time end !!!

// alarm fauture button
const alarmControl = ()=>{
    if (alarmBtn.innerText== "SET ALARM") {
        alarmInpBox.style.display = "block"
        alarmBtn.innerText=" TURN ON ALARM"
        alarmBtn.style.backgroundColor = "green"
        alarmBtn.style.color = "white" 
        alarmNotice.style.display = "none"
        clearInterval(alarmInterval)
        song.pause()
    }
    else if (alarmBtn.innerText== "TURN ON ALARM") {
        alarmInpBox.style.display = "none"
        alarmBtn.innerText=" TURN OFF ALARM"
        alarmBtn.style.backgroundColor = "red"
        alarmBtn.style.color = "white" 
        alarmNotice.style.display = "block"
        alarmInterval = setInterval( myAlarm, 1000)
    }
    else if (alarmBtn.innerText== "TURN OFF ALARM") {
        alarmInpBox.style.display = "none"
        alarmBtn.innerText=" SET ALARM"
        alarmBtn.style.backgroundColor = "grey"
        alarmBtn.style.color = "white" 
        alarmNotice.style.display = "none"
        clearInterval(alarmInterval)
        song.pause()
    }
}
// alarm operation function
const myAlarm = ()=>{
    // myDate = new Date()
    let currentTime = `${hrs}:${min}`
    // let currentTime = myDate.toLocaleTimeString()
    console.log("current time is " + currentTime)
    let alarmSet = inpAlarm.value
    if (alarmSet == currentTime) {
        alarmNotice.innerHTML = `Your Alarm set for ${currentTime}  is Complete!`
        song.play()
    }else{
        alarmNotice.innerHTML = `Upcoming Alarm Set For: ${alarmSet}`
    }
}
// alarm end!!


//countdown project
// countdown control button
var countdownInterval;
const countdownControlBtn=()=>{ 
    if (inpSec.value==="" && inpMin.value==="" && inpHrs.value==="") {
        alert('Error! input can not be empty!')

    }else{
        if( myCBtn.innerText == "START") {
            countdownInterval= setInterval(countdown, 1000); 
            myCBtn.innerText = "STOP"
            myCBtn.style.backgroundColor = "red"
            myCBtn.style.color = "white" 
            inpBox.style.display="none"
            
        }else if ( myCBtn.innerText == "STOP") {
            clearInterval(countdownInterval)
            myCBtn.innerText = "START"
            myCBtn.style.backgroundColor = "green" 
            myCBtn.style.color = "white"  
            song.pause()
        }
    }
}  
// countdown function
var song = new Audio("alarmClockSound.mp3")
const countdown = ()=>{
    let hr   = inpHrs.value;
    let mins = inpMin.value;
    let secs = inpSec.value;
    secs--
    inpSec.value = secs   
    if (secs ==-1) {
        inpSec.value = 60
        inpMin.value -=1   
    }
    if (mins ==-1  && hr>0) {
        inpMin.value = 59
        inpHrs.value -=1    
    }
    if (hr==0) {
        inpHrs.value = 0
    }
    if (hr==0 && mins==0) {
        inpHrs.value = 0
        inpMin.value = 0
    }
    if (hr == 0 && mins == 0 && secs == 0) {
        clearInterval(countdownInterval)
        song.play()
    }
    if (secs>=0 && mins>=0 && hr>=0) {   
        dispCountdown.innerHTML =`${hr}<small class="fs-5">H</small>: ${mins}<small class="fs-5">M</small>: ${secs}<small class="fs-5">S</small>`
    }
}
// reset countdown 
const resetCountdown = ()=>{
    clearInterval(countdownInterval)
    dispCountdown.innerHTML = `00: 00: 00`
    myCBtn.innerText = "START"
    myCBtn.style.backgroundColor = "green" 
    myCBtn.style.color = "white" 
    inpHrs.value = ""
    inpMin.value = ""
    inpSec.value = ""
    inpBox.style.display = "flex"
    song.pause()
}
// countdown end !!!


//stopwatch project
// stopwatch control button
var stopwatchInterval;
const stopwatchControlBtn=()=>{ 
    if( stopBtn.innerText == "START") {
        stopwatchInterval= setInterval(stopwatch, 1); 
        stopBtn.innerText = "PAUSE"
        stopBtn.style.backgroundColor = "red"
        stopBtn.style.color = "white"    
    }
    else if ( stopBtn.innerText == "PAUSE") {
        clearInterval(stopwatchInterval)
        stopBtn.innerText = "START"
        stopBtn.style.backgroundColor = "green" 
        stopBtn.style.color = "white" 
        // to keep track of lapses 
        let myLapses = {
            lapHr:watchhr,
            lapMin:watchmins,
            lapSec:watchsecs,
            lapMiliSec :watchmilisec
        }
        lapsesArray.push(myLapses)
        lapses() 
        song2.pause()
    }
    
}  
// stopwatch function
var song2 = new Audio("alarmTimeUp.mp3")
var watchhr   = 0
var watchmins = 0
var watchsecs = 0
var watchmilisec = 0
const stopwatch = ()=>{
    watchmilisec++  
    if (watchmilisec==1000) {
        watchmilisec = 0
        watchsecs++
    }
    if (watchsecs == 60) {
        watchsecs = 0
        watchmins++   
    }
    if (watchmins == 59) {
        watchmins = 0
        watchhr++   
    }
    dispStopwatch.innerHTML =`${watchhr}<small class="fs-5">H</small>: ${watchmins}<small class="fs-5">M</small>: ${watchsecs}<small class="fs-5">S</small>  ${watchmilisec}<small class="fs-5">ms</small>`
    song2.play()
}
// reset stopwatch 
const resetStopwatch = ()=>{
    clearInterval(stopwatchInterval)
    dispStopwatch.innerHTML = `00: 00: 00: 00`
    stopBtn.innerText = "START"
    stopBtn.style.backgroundColor = "green" 
    stopBtn.style.color = "white" 
    watchhr   = 0
    watchmins = 0
    watchsecs = 0
    watchmilisec = 0
//  for lapses record
    lapsesArray.length = 0
    dispLapses.innerHTML = ""
    song2.pause()
}
// function to keep track of lapses
var lapsesArray =[]
const lapses=()=>{
    dispLapses.innerHTML=""
    for (let index = 0; index < lapsesArray.length; index++) {
        dispLapses.innerHTML +=
            `<tr>
                <td>${index+1}</td>
                <td>${lapsesArray[index].lapHr}<small>hr</small>: ${lapsesArray[index].lapMin}<small>min</small>: ${lapsesArray[index].lapSec}<small>sec</small> ${lapsesArray[index].lapMiliSec}<small class="fs-5">ms</small></td>
            </tr>`  
    } 
}
// stopwatch end !!!

