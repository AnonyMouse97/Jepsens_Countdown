setInterval(function(){
	let current = new Date();
	let holidays = new Date(Date.UTC(2021, 1, 13, 15));

	let diff = holidays - current;
	diff = new Date(diff);


	if (holidays > current) {
	let days = diff.getDate() -1;
	let hours = diff.getHours() ;
	let minutes = diff.getMinutes();
	let seconds = diff.getSeconds();


	document.getElementById('days_count').innerHTML = days;
	document.getElementById('hours_count').innerHTML = hours;
	document.getElementById('minutes_count').innerHTML = minutes;
	document.getElementById('seconds_count').innerHTML = seconds;
	}
},1000);


