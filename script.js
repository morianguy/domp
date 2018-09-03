
let btn = document.querySelector('#Add');
let txtinput = document.querySelector('#task');
let ull = document.querySelector('.listp');

function CheckText(){

	return txtinput.value.length;
}

btn.addEventListener("click", AddTasks);
txtinput.addEventListener("keypress", AddTasks2);

function AddItem() {
		li = document.createElement("li");
		li.setAttribute("class", "listc");
		li.addEventListener("click", donee);

		del = document.createElement("button");
		del.setAttribute("class", "delete");
		del.addEventListener("click", delli);
		del.appendChild(document.createTextNode("Delete"));

		li.appendChild(document.createTextNode(txtinput.value));
		li.appendChild(del);
		

		ull.appendChild(li);
		txtinput.value = '';
}


function AddTasks() {

	if (CheckText() === 0) {alert("Empty! Type something");}
	else {
		AddItem();
	}	
}

function AddTasks2(e) {
	if (e.keyCode === 13) {
		if (CheckText() === 0) {alert("Empty! Type something");}
		else {
			AddItem();
		}
	}	
}


function delli(e) {
	if (confirm("Are you sure?")) {e.target.parentElement.remove();}
}

function donee(e) {
	e = e.target.classList;
	if (e.contains("done")) {
		e.toggle("done", false);
	}
	else {e.toggle("done", true);}
}

console.log()