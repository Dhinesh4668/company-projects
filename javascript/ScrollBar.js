


// typing annimation
var string = "Sree Palaniyappa "; 
var array = string.split("");
var timer;

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("typing-anni").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',90); /* change 70 for speed */

}
frameLooper();