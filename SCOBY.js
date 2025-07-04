function home() {
	window.location.href="index.html";
}
function mail() {
	window.location.href="mailto:scobytheband@gmail.com";
}
function spotify() {
	window.location.href="https://open.spotify.com/artist/0Y9QWqEuEg8xfieBlQTkmf";
}
function iTunes() {
	window.location.href="https://music.apple.com/us/artist/scoby/1678791236?itscg=30200&itsct=music_box_link&ls=1&app=music&mttnsubad=1678791236";
}
function insta() {
	window.location.href="https://www.instagram.com/scobytheband/";
}
function shows() {
	window.location.href="https://bnds.us/rmo867";
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
