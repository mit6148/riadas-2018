$(document).ready(function(){ 


$(document).on('click', '#school', function(){
 	document.getElementById('school').classList.add('active');
 	document.getElementById('room').classList = [];
});

$(document).on('click', '#dorm', function(){
 	document.getElementById('dorm').classList.add('active');
 	document.getElementById('room').classList = [];
});


function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}


$(document).on('click', '#submit', function(){
	var roomHistoryTableDiv = document.getElementById('roomHistoryTableDiv');
	roomHistoryTableDiv.innerHTML = '';

	var dorm = document.getElementById('dormInput').value;
	var room_number = document.getElementById('roomNumberInput').value;

	var table = document.createElement('table');
	table.className = 'table table-bordered table-condensed';
	table.setAttribute("style","border-color:black;");

	var tableHead = document.createElement('thead');
	var tableRow = document.createElement('tr');
	var td1 = document.createElement('td');
	td1.innerHTML = 'Year';
	var td2 = document.createElement('td');
	td2.innerHTML = 'Course';
	var td3 = document.createElement('td');
	td3.innerHTML = 'Home State';
	var td4 = document.createElement('td');
	td4.innerHTML = 'Grade';

	tableRow.appendChild(td1);
	tableRow.appendChild(td2);
	tableRow.appendChild(td3);
	tableRow.appendChild(td4);

	tableHead.appendChild(tableRow);

	table.appendChild(tableHead);

	var tableBody = document.createElement('tbody');
	var tableContent = [];

	get('/api/roomhistory', { 'dorm' : dorm, 'room_number' : room_number }, function(studentArr) {
	    console.log('Hello');
	    for (let i = 0; i < studentArr.length; i++) {
	      console.log('Hello Again');
	      const currentStudentJSON = studentArr[i];
	      
	      const year = parseInt(currentStudentJSON.year);
	      const course = currentStudentJSON.course;
	      const homeState = currentStudentJSON.geolocation;
	      const grade = currentStudentJSON.grade; 

		  console.log(year);	      	

	      tableContent.push([year, course, homeState, grade]);
	    }
	    console.log(tableContent);
	    tableContent.sort(sortFunction);

	    for (let j = 0; j < tableContent.length; j++) {
	    	var tableBodyRow = document.createElement('tr');

	    	var currStudent = tableContent[j];
	    	
	    	var bodyCol1 = document.createElement('td');
	    	bodyCol1.innerHTML = currStudent[0];

	    	var bodyCol2 = document.createElement('td');
	    	bodyCol2.innerHTML = currStudent[1];

	    	var bodyCol3 = document.createElement('td');
	    	bodyCol3.innerHTML = currStudent[2];

	    	var bodyCol4 = document.createElement('td');
	    	bodyCol4.innerHTML = currStudent[3];

	    	tableBodyRow.appendChild(bodyCol1);
	    	tableBodyRow.appendChild(bodyCol2);
	    	tableBodyRow.appendChild(bodyCol3);
	    	tableBodyRow.appendChild(bodyCol4);

	    	tableBody.appendChild(tableBodyRow);

    }

    table.appendChild(tableBody);
    roomHistoryTableDiv.appendChild(table);

	});


});

});
