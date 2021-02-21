// sound button
let isPlaying = false;

document.getElementById('song').addEventListener('click', function(){
	let audio = document.getElementById('audio');
    audio.volume = .1;
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