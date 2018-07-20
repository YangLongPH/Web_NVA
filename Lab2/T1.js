//xu ly su kien go Enter
function NextInput(e, myself, nextcontrolid) {
	if (window.event) e = window.event; //de chay ca tren IE
	if (e.keyCode == 13) {
		document.getElementById(nextcontrolid).focus();
	}
}

function addTextBirthDay(e, nextcontrolid) {
	birthday= document.getElementById("BirthDay");
	if (window.event) e = window.event;
	document.getElementById("ErrorBD").innerHTML = event.which + " Not ok";
	if (e.which>=48 && e.which<=57){
		document.getElementById("ErrorBD").innerHTML = event.which + " ok";

		if (birthday.value.length==2) {
			birthday.value = birthday.value + "/";
		}

		if (birthday.value.length==5) {
			birthday.value = birthday.value + "/";
		}

		if (birthday.value.length==10) {
			document.getElementById(nextcontrolid).focus();
		}
	}else{
		birthday.preventDefault();
	}

}



function dobFocus() {
    if (document.getElementById("BirthDay").value == "dd/mm/yyyy") {
        document.getElementById("BirthDay").value = "";
        document.getElementById("BirthDay").className = "RowInput";
    }
}

function dobBlur() {
    if (document.getElementById("BirthDay").value == "") {
        document.getElementById("BirthDay").value = "dd/mm/yyyy";
        document.getElementById("BirthDay").className = "RowInput";
    }
}

function Standard(name) {
	newName = name;
	ss = newName.split(' ');
	newName = "";
	for (i = 0; i < ss.length; i++)
		if (ss[i].length > 0) {
			if (newName.length > 0) newName = newName + " ";
			newName = newName + ss[i].substring(0, 1).toUpperCase();
			newName = newName + ss[i].substring(1).toLowerCase();
		}
	return newName;
}

