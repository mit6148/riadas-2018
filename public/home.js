$(document).ready(function(){ 


$(document).on('click', '#dorm', function(){
 	document.getElementById('dorm').classList.add('active');
 	document.getElementById('school').classList = [];
});

$(document).on('click', '#room', function(){
 	document.getElementById('room').classList.add('active');
 	document.getElementById('school').classList = [];
});

$(document).on('click', '#school-gender', function(){
 	var activeList = document.getElementsByClassName('active');
	activeList[1].classList = [];
 	document.getElementById('school-gender').classList.add('active');

});

$(document).on('click', '#school-race', function(){
 	var activeList = document.getElementsByClassName('active');
	activeList[1].classList = [];
 	document.getElementById('school-race').classList.add('active');
});

$(document).on('click', '#school-sexual-orientation', function(){
 	var activeList = document.getElementsByClassName('active');
	activeList[1].classList = [];
 	document.getElementById('school-sexual-orientation').classList.add('active');

});

$(document).on('click', '#school-family-income', function(){
 	var activeList = document.getElementsByClassName('active');
	activeList[1].classList = [];
 	document.getElementById('school-family-income').classList.add('active');
});

$(document).on('click', '#school-geolocation', function(){
 	var activeList = document.getElementsByClassName('active');
	activeList[1].classList = [];
 	document.getElementById('school-geolocation').classList.add('active');

});

$(document).on('click', '#school-course', function(){
 	var activeList = document.getElementsByClassName('active');
	activeList[1].classList = [];
 	document.getElementById('school-course').classList.add('active');

});

});