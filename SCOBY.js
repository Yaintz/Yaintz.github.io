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

let menuOpen = false;
function toggleMenu() {
	if (!menuOpen) {
		document.getElementById("navMenuOverlay").style.display = "block";
		document.getElementById("homeButton").style.display = "block";
		document.getElementById("musicButton").style.display = "block";
		document.getElementById("showsButton").style.display = "block";
		document.getElementById("EPKButton").style.display = "block";
		document.getElementById("menuButton").src = "images/xout.png";
		menuOpen = true;
	}
	else {
		document.getElementById("navMenuOverlay").style.display = "none";
		document.getElementById("homeButton").style.display = "none";
		document.getElementById("musicButton").style.display = "none";
		document.getElementById("showsButton").style.display = "none";
		document.getElementById("EPKButton").style.display = "none";
		document.getElementById("menuButton").src = "images/menu.png";
		menuOpen = false;
	}
}
