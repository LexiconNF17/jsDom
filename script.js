function addEntry() 
{
	console.log("id:", this);
	let input = document.querySelector("#entry");
	let val = input.value;
	let lista = document.getElementById("min-lista");
	
	// skapa och lägg in ny <li>
	let listEntry = document.createElement("li");
	listEntry.innerText = val;
	lista.appendChild(listEntry);

	// rensa fältet
	input.value = "";
}

var input = document.querySelector("#entry");
input.addEventListener("change", addEntry);