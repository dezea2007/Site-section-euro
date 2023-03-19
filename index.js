var slave = document.getElementById("slave");
var master = document.getElementById("master");
var col1 = document.querySelector(".col1");
var col2 = document.querySelector(".col2");

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

	slave.style.left = 20 - 0.05 * scrollY + "%";
	master.style.right = 20 - 0.05 * scrollY + "%";
	if (col1_pos < 1) {
		col1.style.left = -30 + 0.05 * scrollY + "%";
		col2.style.right = -30 + 0.05 * scrollY + "%";
	}
});
