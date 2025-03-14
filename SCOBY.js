function home() {
	window.location.href="index.html";
}
function shows() {
	window.location.href="Shows.html";
}
function music() {
	window.location.href="Music.html";
}
function EPK() {
	window.location.href="EPK.html";
}
function resizeAlert() {
	let width = document.documentElement.clientWidth;
	let height = document.documentElement.clientHeight;
	if (width > height) {
		alert("please rotate your screen!");
	}
}
window.addEventListener("resize", resizeAlert);