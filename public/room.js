$(document).ready(function(){ 

var ctx = document.getElementById("courseChart");
    var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Green", "Blue", "Gray", "Purple", "Yellow", "Red", "Black"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#34495e"
      ],
      data: [12, 19, 3, 17, 28, 24, 7]
    }]
  },
  options: {
    responsive: false
  }

});

var ctx2 = document.getElementById("gradeChart");
    var gradeChart = new Chart(ctx2, {
  type: 'pie',
  data: {
    labels: ["Green", "Blue", "Gray", "Purple", "Yellow", "Red", "Black"],
    datasets: [{
      backgroundColor: [
        "#2ecc71",
        "#3498db",
        "#95a5a6",
        "#9b59b6",
        "#f1c40f",
        "#e74c3c",
        "#34495e"
      ],
      data: [12, 19, 3, 17, 28, 24, 7]
    }]
  },
  options: {
    responsive: false
  }

});    



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
        return (a[0] > b[0]) ? -1 : 1;
    }
}


$(document).on('click', '#submit', function(){

	for (idx = 0; idx < alphabeticalStates.length; idx++) {
		statesData.features[idx].properties.density = 0;
	}

	var dorm = document.getElementById('dormInput').value;
	var room_number = ''+document.getElementById('roomNumberInput').value;
	room_number = 'A '+room_number+'A';
	var letters = ['A','B','C','D','E','F','G','H','I','J','K']
	
	/*
	if ($.inArray(room_number[0],letters) === -1 && $.inArray(room_number[room_number.length-1],letters) === -1) {
		room_number = parseInt(room_number);
		console.log(typeof room_number);
	}
	*/

	console.log(room_number);

	var timelineDiv = document.getElementById('timelineDiv');
	timelineDiv.innerHTML = '';

	var timelineUl = document.createElement('ul');
	timelineUl.classList.add('timeline');

	var tableContent = [];
	var frequencyTable = [];
	var frequencyTableYears = [];

	var courseFrequencies = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
	var gradeFrequencies = [0,0,0,0];



	get('/api/roomhistory', { 'dorm' : dorm, 'room_number' : room_number }, function(studentArr) {
	    
	    console.log('Hello');
	    for (let i = 0; i < studentArr.length; i++) {
	      console.log('Hello Again');
	      const currentStudentJSON = studentArr[i];
	      
	      const year = parseInt(''+currentStudentJSON.year);
	      
	      var preFormattedCourse = ''+currentStudentJSON.course;
	      var course;

	      if (preFormattedCourse.length === 1) {
	      	course = parseInt(currentStudentJSON.course);
	      }
	      else if (preFormattedCourse === '2:00 AM') {
	      	course = 2;
	      }
	      else if (preFormattedCourse[1] === ' ') {
	      	console.log('HELLO THERE')
	      	course = parseInt(currentStudentJSON.course[0]);
	      	console.log(course);
	      }
	      else if (preFormattedCourse.length >= 2) {
	      	course = parseInt(currentStudentJSON.course.substring(0,2));
	      }
	      else {
	      	course = 0;
	      }

	      const homeState = currentStudentJSON.geolocation;
	      const grade = parseInt(''+currentStudentJSON.grade); 

		  console.log(year);	      	

	      tableContent.push([year, course, homeState, grade]);

	      var gradeFreq = gradeFrequencies[grade-1];
	      gradeFrequencies[grade-1] = gradeFreq + 1;

	      var courseFreq;
	      if (course != 0) {
	      	courseFreq = courseFrequencies[course-1];
	      	courseFrequencies[course-1] = courseFreq + 1;
	      }
	      else {
			courseFreq = courseFrequencies[24];
			courseFrequencies[24] = courseFreq + 1; 	      	
	      }

	    }
	    console.log('tableContent:')
	    console.log(tableContent);

	    // course data
	    var courseData = [];
	    var courseLabels = [];
	    for (var courseIndex = 0; courseIndex < courseFrequencies.length; courseIndex++) {
	    	if (courseFrequencies[courseIndex] != 0) {
	    		var courseNum;
	    		if (courseIndex != 24) {
		    		courseNum = courseIndex + 1;
		    		courseData.push(courseFrequencies[courseIndex]);
	    			courseLabels.push('Course '+courseNum);
	    		}
	    		else {
	    			courseNum = 'Undeclared'
	    			courseData.push(courseFrequencies[courseIndex]);
	    			courseLabels.push(courseNum);
	    		}
	    	}
	    }
	    myChart.data.labels = courseLabels;
	    myChart.data.datasets[0].data = courseData;
	    myChart.update();

	    // grade data
		var gradeData = [];
		var gradeLabels = [];	    
	    for (var gradeIndex = 0; gradeIndex < gradeFrequencies.length; gradeIndex++) {
	    	if (gradeFrequencies[gradeIndex] != 0) {
	    		var gradeNum = gradeIndex + 1;
	    		gradeData.push(gradeFrequencies[gradeIndex]);
	    		gradeLabels.push('Year '+gradeNum);
	    	}
	    }
	    gradeChart.data.labels = gradeLabels;
	    gradeChart.data.datasets[0].data = gradeData;
	    gradeChart.update();


	    // map data
	    for (let index = 0; index < tableContent.length; index++) {
	    	var studInfoLine = tableContent[index];
	    	var studState = studInfoLine[2];
	    	if (studState != '') {
		    	var stateIndex = alphabeticalStates.indexOf(studState);
		    	console.log(studState);
		    	console.log(stateIndex);
		    	var count = statesData.features[stateIndex].properties.density;
	    		statesData.features[stateIndex].properties.density = count + 1;
	    	}
	    }

	    geojson = L.geoJson(statesData, {
      		style: style,
      		onEachFeature: onEachFeature
    	}).addTo(map);

	    tableContent.sort(sortFunction);

	    // create frequency table
	    for (let j = 0; j < tableContent.length; j++) {
			var currYear = tableContent[j][0];
			if ($.inArray(currYear,frequencyTableYears) === -1) {
				frequencyTable.push([currYear,1,[tableContent[j]]]);
				frequencyTableYears.push(currYear);
			}
			else {
				var currYearIndex = frequencyTableYears.indexOf(currYear);
				var count = frequencyTable[currYearIndex][1];
				frequencyTable[currYearIndex][1] = count + 1;
				frequencyTable[currYearIndex][2].push(tableContent[j]);
			}
	    }
	    console.log('frequencyTable: ')
	    console.log(frequencyTable)

	    for (let k = 0; k < frequencyTable.length; k++) {
	    	var yearTable = document.createElement('table');
	    	yearTable.className = 'table table-striped';
	    	yearTable.setAttribute('style','text-align:center;');

	    	var year = frequencyTableYears[k];

	    	var numCols = frequencyTable[k][1];
	    	
	    	var yearTableHead = document.createElement('thead');
	    	var yearTableHeadRow = document.createElement('tr');
	    	
	    	for (let studIndex = 0; studIndex < numCols; studIndex++) {
	    		var th = document.createElement('th');
	    		var num = studIndex + 1;
	    		th.innerHTML = 'Student ' +num;
	    		yearTableHeadRow.appendChild(th);
	    	}
	    	yearTableHead.appendChild(yearTableHeadRow);
	    	yearTable.appendChild(yearTableHead);

	    	var yearTableBody = document.createElement('tbody');

	    	var tr1 = document.createElement('tr');
	    	var tr2 = document.createElement('tr');
	    	var tr3 = document.createElement('tr');


	    	for (let studIndex2 = 0; studIndex2 < numCols; studIndex2++) {
	    		var studInfo = frequencyTable[k][2][studIndex2];
	    		console.log('studInfo: ')
	    		console.log(studInfo)
	    		var td1 = document.createElement('td');
	    		td1.innerHTML = 'Crs. '+studInfo[1];

	    		var td2 = document.createElement('td');
	    		td2.innerHTML = 'Year '+studInfo[3];

	    		var td3 = document.createElement('td');
	    		if (studInfo[2] != '') {
		    		td3.innerHTML = studInfo[2];	    			
	    		}
	    		else {
	    			td3.innerHTML = 'International'	
	    		}

	    		tr1.appendChild(td1);
	    		tr2.appendChild(td2);
	    		tr3.appendChild(td3);
	    	}
	    	yearTableBody.appendChild(tr1);
	    	yearTableBody.appendChild(tr2);
	    	yearTableBody.appendChild(tr3);

	    	yearTable.appendChild(yearTableBody);

	    	var timelineLi = document.createElement('li');
	    	timelineLi.className = 'timeline-event';

	    	var timelineInnerDiv = document.createElement('div');
	    	timelineInnerDiv.setAttribute('style','float:left; margin-top: 30px; margin-left: 31.5px; border-left: 2px solid black; height: 470px;');

	    	var timelineLabel = document.createElement('label');
	    	timelineLabel.className = "timeline-event-icon";

	    	var timelineInnerDiv2 = document.createElement('div');
	    	timelineInnerDiv2.className = "timeline-event-copy";

	    	var timelineDate = document.createElement('p');
	    	timelineDate.className = 'timeline-event-thumbnail';
	    	timelineDate.setAttribute('style','font-size:15px');
	    	var year2 = year + 1;
	    	timelineDate.innerHTML = 'September '+year+ ' - June '+year2;

	    	var timelineImage = document.createElement('img');
	    	if (numCols === 3) {
		    	timelineImage.setAttribute('src','/static/people.PNG');
	    	}
	    	if (numCols === 2) {
		    	timelineImage.setAttribute('src','/static/people2.png');
	    	}
	    	if (numCols === 1) {
		    	timelineImage.setAttribute('src','/static/people1.png');
	    	}


	    	var tableDiv = document.createElement('div');
	    	tableDiv.className = 'col-sm-6';

	    	tableDiv.appendChild(yearTable);
	    	timelineInnerDiv2.appendChild(timelineDate);
	    	timelineInnerDiv2.appendChild(timelineImage);
	    	timelineInnerDiv2.appendChild(tableDiv);

	    	timelineLi.appendChild(timelineInnerDiv);
	    	timelineLi.appendChild(timelineLabel);
	    	timelineLi.appendChild(timelineInnerDiv2);

	    	timelineUl.appendChild(timelineLi);

	    }

	    timelineDiv.appendChild(timelineUl);


	});


	/*
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
	*/

});

});
