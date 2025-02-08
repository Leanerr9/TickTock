// Code to retrieve an Html element from the Dom based on it's unique indentifier
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

// Code to constantly update time every one second
setInterval(() =>{
    // code to display current time only
    let currentTime = new Date();
// Employ an 'if' condition to add a placeholder if digit is less than 10
hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();

},1000);

// Try not to be late for work!