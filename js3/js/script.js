



	var header = document.getElementsByTagName('h1')[0], 
		start = document.getElementById('start'), 

		clear = document.getElementById('clear'), 
		miliSec = 0, sec = 0, min = 0, hours = 0, 
		t; 

function plusMili() {
	miliSec++; 
	if (miliSec >= 1000){
		miliSec = 0; 
		sec++; 
		if (sec >= 60){
			sec = 0;
			min++;
			if (min >= 60){
				min = 0; 
				hours++
			}
		}
	}

header.textContent = (hours ? ( hours > 9 ? hours : "0" + hours ) : 
						"00") + ":" + ( min ? (min > 9 ? min : "0" + min ) : 
						"00") + ":" + ( sec > 9 ? sec : "0" + sec) + ":" + (miliSec >= 100 ? miliSec : 
						miliSec < 100 ? "0" + miliSec : "00" + miliSec);


}; 


function timer(){
	t = setInterval(plusMili, 1);
};

function stop() {
    clearInterval(t);
    start.id = "start";
    start.textContent = "Start";
    start.className = "btn btn-success";
};

start.onclick = change; 


/* Clear button */
clear.onclick = function() {
    header.textContent = "00:00:00:000";
    sec = 0; min = 0; hours = 0; miliSec = 0; 
}

function change() {
	if (start.id == "start") {
		timer(); 
		start.className = "btn btn-danger";
		start.id = "stop";
		start.textContent = "Pause"; 
	} else {
		start.removeEventListener('click', timer); 
		start.addEventListener('click', stop());
	}
};



