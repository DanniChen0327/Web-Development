var numberOfSquares = 6;
var colors = [];
var targetColor;
var squares = document.querySelectorAll(".square");
var RGBDisplay = document.getElementById("RGBDisplay");
var flagDisplay = document.querySelector("#flag");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i = 0; i< modeButtons.length;i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numberOfSquares =3 : numberOfSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i< squares.length;i++){
		//add click listener to square
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to target color
			if(clickedColor === targetColor){
				flagDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "play again?";
			}else{
				this.style.backgroundColor= "#232323";
				flagDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset(){
	colors = generateColor(numberOfSquares);
	targetColor = pickColor();
	RGBDisplay.textContent = targetColor;
	flagDisplay.textContent = "";
	resetButton.textContent = "New Colors";
	for(var i = 0; i< squares.length;i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
		
	}
	h1.style.backgroundColor = "#232323";
}


resetButton.addEventListener("click", function(){
	reset();
});


function changeColors(color){
	for(var i = 0; i< squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateColor(num){
	var arr = [];
	for(var i= 0; i< num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}