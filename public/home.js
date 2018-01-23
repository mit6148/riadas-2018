$(document).ready(function(){ 


$(document).on('click', '#dorm', function(){
 	document.getElementById('dorm').classList.add('active');
 	document.getElementById('school').classList = [];
});

$(document).on('click', '#floor', function(){
 	document.getElementById('floor').classList.add('active');
 	document.getElementById('school').classList = [];
});

$(document).on('click', '#room', function(){
 	document.getElementById('floor').classList.add('active');
 	document.getElementById('school').classList = [];
});

$(document).on('click', '#school-gender', function(){
 	document.getElementById('school-gender').classList.add('active');
 	document.getElementsByClassName('active')[1].classList = [];
});

$(document).on('click', '#school-race', function(){
 	document.getElementById('school-race').classList.add('active');
 	document.getElementsByClassName('active')[1].classList = [];
});

$(document).on('click', '#school-sexual-orientation', function(){
 	document.getElementById('school-sexual-orientation').classList.add('active');
 	document.getElementsByClassName('active')[1].classList = [];
});

$(document).on('click', '#school-family-income', function(){
 	document.getElementById('school-family-income').classList.add('active');
 	document.getElementsByClassName('active')[1].classList = [];
});

$(document).on('click', '#school-geolocation', function(){
 	document.getElementById('school-geolocation').classList.add('active');
 	document.getElementsByClassName('active')[1].classList = [];
});

$(document).on('click', '#school-course', function(){
 	document.getElementById('school-course').classList.add('active');
 	document.getElementsByClassName('active')[1].classList = [];
});

});