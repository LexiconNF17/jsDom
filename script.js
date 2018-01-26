(function () {
	let qs = selector => document.querySelector(selector);
	let ce = (tag, innerText) => {
		let element = document.createElement(tag);
		element.innerText = innerText;
		return element;
	} 

	function addEntry() 
	{
		let lista = qs("#min-lista");

		// skapa och lägg in ny <li>
		let listEntry = ce("li", this.value);
		lista.appendChild(listEntry);

		let button = ce("button", "x");
		listEntry.appendChild(button);

		// rensa fältet
		this.value = "";
	}

	function removeEntry(event) {
		let t = event.target
		console.log(t, event);	
		if (t.nodeName === "BUTTON") {
			t.parentElement.remove();
		}
	}

	qs("#entry").addEventListener("change", addEntry);
	qs("#min-lista").addEventListener("click", removeEntry);

})();