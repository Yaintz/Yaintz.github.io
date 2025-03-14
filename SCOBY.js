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
	if (width > height && isMobile()) {
		alert("please rotate your screen!");
	}
}
function isMobile() {
  		return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
	}
window.addEventListener("resize", resizeAlert);
var loadingScreen = document.querySelector(".loadingScreen");
window.addEventListener('load', function() {
	loadingScreen.style.display = 'none';
})