// button styling

// sound button
var isPlaying = false;

document.getElementById('song').addEventListener('click', function(){
	let audio = document.getElementById('audio');
	audio.loop=true;
	if (isPlaying === false){
		audio.play();
		document.getElementById('song').style.backgroundPosition = 'bottom -64px left -384px';
		isPlaying = true;
	}else{
		audio.pause();
		document.getElementById('song').style.backgroundPosition = 'bottom -64px left -448px';
		isPlaying = false;
	}

});

//counter
setInterval(function(){
	let current = new Date();
	let holidays = new Date(Date.UTC(2021, 1, 13, 15));

	let diff = holidays - current;
	diff = new Date(diff);


	if (holidays > current) {
	let days = diff.getDate() -2;
	let hours = diff.getHours() ;
	let minutes = diff.getMinutes();
	let seconds = diff.getSeconds();


	document.getElementById('days_count').innerHTML = days;
	document.getElementById('hours_count').innerHTML = hours;
	document.getElementById('minutes_count').innerHTML = minutes;
	document.getElementById('seconds_count').innerHTML = seconds;
	}
},1000);

