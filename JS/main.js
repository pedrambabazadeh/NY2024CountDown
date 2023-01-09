//changeMain = ()=> document.getElementById("main").innerHTML="<h1>Hello world</h1>;"
//changeMain();
const myTime = "1 jan 2024";

countDown = function countDown(){
    const desiredTime = new Date(myTime);
    const currentTime = new Date();
    const difference = (desiredTime - currentTime);
    const eachDay = 3600 * 24 * 1000
    const leftDays = difference/eachDay;
    const leftHours = (difference%eachDay) / 3600000;
    const leftMinutes = ((difference%eachDay) % 3600000) / 60000 ;
    const leftSeconds = (((difference%eachDay) % 3600000) % 60000) / 1000; 
    
    let daysShow = document.getElementById("daysNum");
    let hoursShow = document.getElementById("hoursNum");
    let minutesShow = document.getElementById("minutesNum");
    let secondsShow = document.getElementById("secondsNum");

    daysShow.innerText =Math.floor( leftDays);
    hoursShow.innerText = Math.floor(00 + leftHours);
    minutesShow.innerText =Math.floor(leftMinutes);
    secondsShow.innerText = Math.floor(leftSeconds);

}

setInterval(countDown, 1000);