$(document).ready(function(){ 

$(document).on('click', '#school', function(){
 	document.getElementById('school').classList.add('active');
 	document.getElementById('dorm').classList = [];
});

$(document).on('click', '#floor', function(){
 	document.getElementById('floor').classList.add('active');
 	document.getElementById('dorm').classList = [];
});

$(document).on('click', '#room', function(){
 	document.getElementById('room').classList.add('active');
 	document.getElementById('dorm').classList = [];
});

$(document).on('click', '#dorm-gender', function(){
 	document.getElementById('dorm-gender').classList.add('active');
	document.getElementsByClassName('active')[1].classList = [];
});

$(document).on('click', '#dorm-race', function(){
 	document.getElementById('dorm-race').classList.add('active');
 	document.getElementsByClassName('active')[1].classList = [];
});

$(document).on('click', '#dorm-sexual-orientation', function(){
 	document.getElementById('dorm-sexual-orientation').classList.add('active');
 	document.getElementsByClassName('active')[1].classList = [];
});

$(document).on('click', '#dorm-family-income', function(){
 	document.getElementById('dorm-family-income').classList.add('active');
 	document.getElementsByClassName('active')[1].classList = [];
});

$(document).on('click', '#dorm-geolocation', function(){
 	document.getElementById('dorm-geolocationoo').classList.add('active');
 	document.getElementsByClassName('active')[1].classList = [];
});

$(document).on('click', '#dorm-course', function(){
 	document.getElementById('dorm-course').classList.add('active');
 	document.getElementsByClassName('active')[1].classList = [];
});

});