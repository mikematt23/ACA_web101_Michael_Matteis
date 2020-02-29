var previousPlay = null
function addGamePiece(selectedElement) {
  // creating element

  if (selectedElement.children.length){
    alert("Square has been played")
  } else{
    var newElement = document.createElement('h1')
  }
 
 

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

console.log(previousPlay)