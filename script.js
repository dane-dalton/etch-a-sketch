const etchASketch = document.querySelector('.etch-a-sketch')
const submit = document.querySelector('.submit')
const gridSizeForm = document.querySelector('.grid-size')
const warningMsg = document.createElement('div')

let gridSize = 16

//Create grid

//Grid size submissions
gridSize = submit.addEventListener('click', () => {

    const input = document.querySelector('.input')
    const inputText = input.value
    let size
    
    //remove error message if it exists
    if ( gridSizeForm.lastElementChild == warningMsg) gridSizeForm.removeChild(warningMsg)

    //Input validation w/ warning message
    if ( isNaN(inputText) || inputText < 1 || inputText > 100) {
        warningMsg.textContent = 'Oops! You must enter a number between 1 and 100 to create a grid.'
        
        warningMsg.classList.add('warning-msg')
        gridSizeForm.appendChild(warningMsg)
        return;
    }

    size = inputText
    return size
})

function createEtchGrid() {

}
//Check for valid submissions (between 1-100)

//Clear and create new grid



//Clear button empties grid



//Hovering a grid square changes background color

//Clicking a new color changes sketch color