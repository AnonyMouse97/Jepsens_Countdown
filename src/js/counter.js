//progress bar
let start = new Date(2021, 0, 5, 9);
let end = new Date(2021, 6, 23, 17);
let current = new Date();
let progress = Math.floor(((current.getTime() - start)/(end - start))*100);

document.querySelector('.progress').setAttribute('style', `width : ${progress}%;`)
document.querySelector('.percentage').innerHTML = `${progress}%`

//counter
function counter(y, m, d, h, id){
	let current = new Date();
	let holidays = new Date(y, m-1, d, h);
	let diff = holidays - current;
	
	let days = Math.floor(diff / (1000 * 60 * 60 * 24));
	let hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
	let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((diff % (1000 * 60)) / 1000);

	document.querySelector(`#${id} .days_count`).innerHTML = Math.abs(days);
	document.querySelector(`#${id} .hours_count`).innerHTML = Math.abs(hours);
	document.querySelector(`#${id} .minutes_count`).innerHTML = Math.abs(minutes);
	document.querySelector(`#${id} .seconds_count`).innerHTML = Math.abs(seconds);
	
}
//clone
function clone(id, title){
    //cloning and changing id
    let master = document.querySelector('.countdown').cloneNode(true);;
    document.querySelector('#main_section').appendChild(master);
    let target = document.querySelectorAll('.countdown');
    target = target[target.length - 1];
    target.setAttribute('id', id);
    // changing h2
    document.querySelector(`#${id} h2`).innerHTML = title;

}

// call functions

clone('beCodeEnd', 'End of BeCode :');
clone('fromStart', 'Time from start :')


setInterval(function(){
    counter(2021, 4, 3, 17, 'countdown_1');
    counter(2021, 7, 23, 17, 'beCodeEnd');
}, 1000);







