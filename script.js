
//resize
const menuRW = document.querySelector(".menu-pc");
const storyContent = document.querySelector(".box-story");

window.onresize = function singularResize() {
	const windowWidth = window.innerWidth;

	if(windowWidth >= 1024){
		menuRW.className = "menu-pc";
		storyContent.className += " grid"		
	} else {
		menuRW.className = "menu-mobile";
		storyContent.className = "";
	}
}

//mobilemenu button
const menuButton = document.querySelector(".button-menu");
const menuDisplay = document.querySelector(".menu-display");

menuButton.addEventListener("click", function () {
	if (menuDisplay.style.display === "none") {
		menuDisplay.style.display = "block";
		menuButton.ariaExpanded = "true"
	} else {
		menuDisplay.style.display = "none";
		menuButton.ariaExpanded = "false"
	}
});

//toggle accordion
const toggleButton = document.querySelectorAll(".toggle-button");
const toggleDescription = document.querySelectorAll(".toggle-detail")
const toggleIcon = document.querySelectorAll(".expand-more")

console.log(toggleButton[1]);

for (let i = 0; i < toggleButton.length; i++) {
	toggleButton[i].addEventListener ("click", function () {
		toggleDescription[i].classList.toggle("toggle-display");
		toggleIcon[i].classList.toggle("expanded")
	})
}

for (let i = 0; i < toggleButton.length; i++) {
	toggleButton[i].addEventListener ("click", function () {
		if (toggleButton[i].ariaExpanded === "false") {
			toggleButton[i].ariaExpanded = "true"
		} else {
			toggleButton[i].ariaExpanded = "false"
		}
	})
	
}
