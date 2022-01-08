const container = document.getElementById("tablecontent-container");
const card = document.getElementsByClassName("content-card");

window.onload = () => {
	for (var i = 0; i < 8; i++) {
		var element = card.cloneNode();
		//container.appendChild(element);
		alert (card)
	};
};