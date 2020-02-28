var math = 1+10
console.log('hey! Im working',math)

//get an element from the dom
var mainContainer = document.getElementsByClassName("mainContainer")
console.log("mainContainer",mainContainer)
  

var previousPlay = null
function addGamePiece (selectedElement) {
// creating element
var newElement = document.createElement('h1')

previousPlay = setGamePiece()
newElement.innerText = previousPlay
selectedElement.appendChild(newElement)
}
function setGamePiece() {
if (previousPlay === 'x') {
return 'o'
} else if (previousPlay === 'o') {
return 'x'
} else {
return 'x'
}
}

function onePiece(){
  if(previousPlay === null){
  return setGamePiece
} else{
  return null
}
}