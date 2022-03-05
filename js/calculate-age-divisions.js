function nfaaDivision(age) {
	if (age < 12) { 
		return "Cub (under 12)";
	} else if (age <= 14) {
		return "Youth (12&ndash;14)";
	} else if (age <= 17) {
		return "Young Adult (15&ndash;17)";
	} else if (age <= 49) {
		return "Adult (18&ndash;49)";
	} else if (age <= 59) {
		return "Senior (50+)";
	} else if (age <= 69) {
		return "Silver Senior (60+)";
	} else {
		return "Master Senior (70+)";
	};
};

function usaDivision(age) {
	if (age <= 12) { 
		return "Under 13 (Bowman)";
	} else if (age <= 14) {
		return "Under 15 (Cub)";
	} else if (age <= 17) {
		return "Under 18 (Cadet)";
	} else if (age <= 20) {
		return "Under 21 (Junior)";
	} else if (age <= 49) {
		return "Senior (21&ndash;49)";
	} else if (age <= 59) {
		return "Master 50+";
	} else if (age <= 69) {
		return "Master 60+";
	} else {
		return "Master 70+";
	};
};

function calculateAgeDivisions() {
	var m = document.getElementById('dobMonth');
	var month = String(m.options[m.selectedIndex].value);
	var d = document.getElementById('dobDay');
	var day = String(d.options[d.selectedIndex].value);
	var y = document.getElementById('dobYear');
	var year = String(y.options[y.selectedIndex].value);
	
	var eventM = document.getElementById('eventMonth');
	var eventMonth = String(eventM.options[eventM.selectedIndex].value);
	var eventD = document.getElementById('eventDay');
	var eventDay = String(eventD.options[eventD.selectedIndex].value);
	var eventY = document.getElementById('eventYear');
	var eventYear = String(eventY.options[eventY.selectedIndex].value);			

	if (month != "" && day != "" && year != "") {
	
		/* Calculate current age based on DOB */
		var today = moment();
		var formDate = month + day + year;
		var DOB = moment(formDate, 'MMDDYYYY');
		var age = today.diff(DOB, 'years');
		
		/* Calculate age as of Dec 31 for USA Archery purposes */
		var usaArcheryAge = moment().year() - DOB.year();

		/* Insert the divisions for current age */				
		document.getElementById('ageNFAA').innerHTML = nfaaDivision(age);
		document.getElementById('ageUSAArchery').innerHTML = usaDivision(usaArcheryAge);
		document.getElementById('todayAge').innerHTML = "Today (age " + age + ")";
		document.getElementById('output').style.display = "table";
		document.getElementById('ageDivisions').style.display = "table-row";
	};
		
	/* Insert the divisions for a future event date */
	if (eventMonth != "" && eventDay != "" && eventYear != "") {
	
		/* Calculate age at future date */
		var eventDate = moment(eventYear + '-' + eventMonth + '-' + eventDay);
		var ageAtEvent = eventDate.diff(DOB, 'years');
		
		/* Calculate age as of Dec 31 during the year of the future event. */
		var usaArcheryEventAge = eventDate.year() - DOB.year();
		
		/* Insert the divisions for the future event */
		document.getElementById('eventNFAA').innerHTML = nfaaDivision(ageAtEvent);
		document.getElementById('eventUSAArchery').innerHTML = usaDivision(usaArcheryEventAge);
		document.getElementById('eventDateAndAge').innerHTML = 
			eventDate.format('MMM D, YYYY') + " (age " + ageAtEvent + ")";
		document.getElementById('eventDivisions').style.display = "table-row";				
	};
};
