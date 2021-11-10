"use strict";

/*
	Retrieves a random fact about cider and sets on index.html
*/

//create string array of cider facts
var facts = new Array(8);
facts[0] = "The UK has the world's highest per capita consumption of cider.";
facts[1] = "In the 14th century, children were frequently baptised in cider because it was much cleaner than water.";
facts[2] = "It takes about 36 apples to produce one gallon of cider.";
facts[3] = "In the 19th century, cider was advertised as a cure for the gout and other illnesses.";
facts[4] = "Captain Cook used cider to treat the vitamin deficiencies that cause scurvy on long voyages.";
facts[5] = "U.S President John Adams drank a tankard of cider every morning because he believed it promoted good health. And it must have—Adams lived to 90, making him our third longest living president, behind Ford & Reagan.";
facts[6] = "When Caesar and his invading soldiers stormed through England in 55 BCE, they found Celts sipping a brew made from crab apples. The troops were quick to pick up the habit and take it back to Rome.";
facts[7] = "Purists believe that cider refers only to those made with apples and not the modern ciders like pear ciders or berry ciders as many beverage makers are selling now.";

setDYKFact(); //set first fact when page loads

setInterval("setDYKFact()", 6500); //set new fact every 6.5 seconds

//function to set random fact
function setDYKFact() {
	document.getElementById("dykItem").textContent =
	facts[Math.floor(Math.random() * 8)];
}
