$(document).ready(function(){ 

$(document).on('click', '#school', function(){
 	document.getElementById('school').classList.add('active');
 	document.getElementById('dorm').classList = [];
});


$(document).on('click', '#room', function(){
 	document.getElementById('room').classList.add('active');
 	document.getElementById('dorm').classList = [];
});

$(document).on('click', '#dorm-gender', function(){
 	var activeList = document.getElementsByClassName('active');
	activeList[1].classList = [];
 	document.getElementById('dorm-gender').classList.add('active');

});

$(document).on('click', '#dorm-race', function(){
 	var activeList = document.getElementsByClassName('active');
	activeList[1].classList = [];
 	document.getElementById('dorm-race').classList.add('active');
});

$(document).on('click', '#dorm-sexual-orientation', function(){
 	var activeList = document.getElementsByClassName('active');
	activeList[1].classList = [];
 	document.getElementById('dorm-sexual-orientation').classList.add('active');

});

$(document).on('click', '#dorm-family-income', function(){
 	var activeList = document.getElementsByClassName('active');
	activeList[1].classList = [];
 	document.getElementById('dorm-family-income').classList.add('active');
});

$(document).on('click', '#dorm-geolocation', function(){
 	var activeList = document.getElementsByClassName('active');
	activeList[1].classList = [];
 	document.getElementById('dorm-geolocation').classList.add('active');

});

$(document).on('click', '#dorm-course', function(){
 	var activeList = document.getElementsByClassName('active');
	activeList[1].classList = [];
 	document.getElementById('dorm-course').classList.add('active');

});

});