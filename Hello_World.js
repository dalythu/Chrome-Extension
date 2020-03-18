
document.getElementById("submit").addEventListener("click", hello_world);

function hello_world() {
	var fname = document.getElementById("fname").value;
	console.log("hello " + fname);

	// this is where we call the save function
}