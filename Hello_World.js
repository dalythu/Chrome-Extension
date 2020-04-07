
document.getElementById("submit").addEventListener("click", hello_world);

function hello_world() {
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	console.log("hello " + fname + " " + lname);

	// this is where we call the save function
}
