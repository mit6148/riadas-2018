$(document).ready(function(){ 


$(document).on('click', '#school', function(){
 	document.getElementById('school').classList.add('active');
 	document.getElementById('room').classList = [];
});

$(document).on('click', '#dorm', function(){
 	document.getElementById('dorm').classList.add('active');
 	document.getElementById('room').classList = [];
});
