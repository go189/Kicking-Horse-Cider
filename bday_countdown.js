"use strict";

/*
   Javascript program to calculate and display time
	left until RHC birthday discount
*/

runClock();
setInterval("runClock()", 1000);

//function to create and run the countdown clock
function runClock() {
	//Store the current date and time
	var currentDay = new Date();
	var dateStr = currentDay.toLocaleDateString();
	var timeStr = currentDay.toLocaleTimeString();

	//calculate the days until August 15
	var bday = new Date("August 15, 2021");
	var daysLeft = (bday - currentDay)/(1000*60*60*24);
	
	//calculate the hours left in the current days
	var hrsLeft = (daysLeft - Math.floor(daysLeft))*24;
	
	//calculate the minutes and seconds left in current hours
	var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
	var secsLeft = (minsLeft - Math.floor(minsLeft))*60;
	
	//display the time left until RHC b-day discount
	document.getElementById("days").textContent = Math.floor(daysLeft);
	document.getElementById("hrs").textContent = Math.floor(hrsLeft);
	document.getElementById("mins").textContent = Math.floor(minsLeft);
	document.getElementById("secs").textContent = Math.floor(secsLeft);
}
