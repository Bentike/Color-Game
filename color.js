var numbox = 6
var colors = generateRandomColors(numbox)
var pickedColor = selectColor()
var message = document.getElementById("message") 
var heading = document.getElementById("heading")
var h1 = document.querySelector("h1")
var easy = document.getElementById("easy-btn")
var hard = document.querySelector("#hard-btn")
var resetButton = document.querySelector("button")
 h1.textContent = pickedColor

easy.addEventListener("click", function(){
	this.classList.add("selected")
	hard.classList.remove("selected")
	numbox = 3
	colors = generateRandomColors(numbox)
	pickedColor = selectColor()
	h1.textContent = pickedColor
	message.textContent = ""
	heading.style.background = "steelblue"
	resetButton.textContent = "New Colors"
	for(var i = 0; i < box.length; i++){
		if(colors[i]){
			box[i].style.background = colors[i]
		}else{
			box[i].style.display = "none"
		}
	}
})

hard.addEventListener("click", function(){
	this.classList.add("selected")
	easy.classList.remove("selected")
	numbox = 6
	colors = generateRandomColors(numbox)
	pickedColor = selectColor()
	h1.textContent = pickedColor
	message.textContent = ""
	heading.style.background = "steelblue"
	resetButton.textContent = "New Colors"
	for(var i = 0; i < box.length; i++){
	  if(colors[i]){
	  	box[i].style.background = colors[i]
	  	box[i].style.display = "block"
	  }
	}
})
var box = document.querySelectorAll(".box")
for(var i = 0; i < box.length; i++){
	box[i].style.background = colors[i]
  
  box[i].addEventListener("click", function(){
  	var clickedColor = this.style.background
  	if(clickedColor === pickedColor){
  		message.textContent = "Correct!"
  		changeColor(clickedColor)
  		heading.style.background = clickedColor
  	    resetButton.textContent = "Play Again"
  	}else{
  		message.textContent = "Try Again!"
  		this.style.background = "#232323"
  	}
  })
}

 resetButton.addEventListener("click", function(){
 	colors = generateRandomColors(numbox)
 	pickedColor = selectColor()
 	h1.textContent = pickedColor
 	heading.style.background = "steelblue"
 	this.textContent = "New Colors"
 	message.textContent = ""
 	for(var i = 0; i < colors.length; i++){
 		box[i].style.background = colors[i]
 	}
 })



function generateRandomColors(num){
	var generatedColors = []
	for(var i = 0; i < num; i++){
     generatedColors.push(generateColor())
	}
	return generatedColors
}

function generateColor(){
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	return `rgb(${r}, ${g}, ${b})`
}

 function selectColor(color){
 	var randomColor = Math.floor(Math.random() * colors.length)
    return colors[randomColor]
 }

function changeColor(color){
	for(var i = 0; i < box.length; i++){
		box[i].style.background = color
	}
}


