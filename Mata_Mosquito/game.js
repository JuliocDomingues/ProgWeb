var height = 0
var width = 0
var life = 1
var time = 60
var timeGnat = 1500

var level = window.location.search
level = level.replace('?', '')

if(level === 'facil'){
	timeGnat = 1500
}else if(level === 'normal'){
	timeGnat = 1000
}else if(level === 'dificil'){
	timeGnat = 750
}

var stopwatch = setInterval(function(){
	time--

	if(time < 0){
		clearInterval(stopwatch)
		clearInterval(createGnat)
		window.location.href = 'victory.html'
	}else{
		document.getElementById('stopwatch').innerHTML = time
	}
	
}, 1000)

function gameScreenSize(){
	height = window.innerHeight
	width = window.innerWidth
	console.log(height, width)
}

gameScreenSize()

function addRandomGnat(){

	if(document.getElementById('gnat')){
		document.getElementById('gnat').remove()

		if(life > 3){
			window.location.href = 'game_over.html'
		}else{
			document.getElementById('l' + life).src = "imagens/coracao_vazio.png"
			life++
		}
	}
	
	var posX = Math.floor(Math.random() * width) - 90
	var posY = Math.floor(Math.random() * height) - 90

	posX = posX < 0 ? 0 : posX
	posY = posY < 0 ? 0 : posY

	console.log(posX, posY)

	var gnat = document.createElement('img')
	gnat.src = 'imagens/mosca.png'
	gnat.className = randomSize() + ' ' + randomSide()
	gnat.style.left = posX + 'px'
	gnat.style.top = posY + 'px'
	gnat.style.position = 'absolute'
	gnat.id = 'gnat'

	gnat.onclick = function(){
		this.remove()
	}

	document.body.appendChild(gnat)
}

function randomSize(){
	var randomClass = Math.floor(Math.random() * 3)

	switch(randomClass){
		case 0:
			return 'mosquitoImg1'
		case 1:
			return 'mosquitoImg2'
		case 2:
			return 'mosquitoImg3'
	}
}

function randomSide(){
	var randomClass = Math.floor(Math.random() * 2)

	switch(randomClass){
		case 0:
			return ' '
		case 1:
			return 'sideB'
	}
}