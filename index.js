var slave = document.getElementById("slave");
var master = document.getElementById("master");
var col1 = document.querySelector(".col1");
var col2 = document.querySelector(".col2");
const toggler = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".navlinks-container");
const links = document.querySelectorAll(".navlinks-container a");

const toggleNav = (e) => {
	toggler.classList.toggle("open");

	const ariaToggle =
		toggler.getAttribute("aria-expended") === "true" ? "false" : "true";
	toggler.setAttribute("aria-expended", ariaToggle);
	navLinksContainer.classList.toggle("open");
};

toggler.addEventListener("click", toggleNav);
links.forEach((a) => a.addEventListener("click", toggleNav));

new ResizeObserver((entries) => {
	if (entries[0].contentRect.width < 900) {
		navLinksContainer.style.transition = "transform 0.3s ease-out";
	} else {
		navLinksContainer.style.transition = "none";
	}
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.querySelector("nav").style.top = "0";
	} else {
		document.querySelector("nav").style.top = "-100px";
	}
	prevScrollpos = currentScrollPos;
};

window.addEventListener("scroll", () => {
	let { scrollY } = window;
	col1_pos = -30 + 0.05 * scrollY;

	if (col1_pos < 1 && window.innerWidth >= 900) {
		slave.style.left = 20 - 0.05 * scrollY + "%";
		master.style.right = 20 - 0.05 * scrollY + "%";
	} else {
		slave.style.left = 10 - 0.05 * scrollY + "%";
		master.style.right = 10 - 0.05 * scrollY + "%";
	}
});
