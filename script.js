const etchASketch = document.querySelector('.etch-a-sketch')
const submit = document.querySelector('.submit')
const gridSizeForm = document.querySelector('.grid-size')
const warningMsg = document.createElement('div')

const defaultGridSize = 16

//Create grid
window.onload = createEtchGrid(defaultGridSize)

drawOnGrid()

//Grid size submissions
submit.addEventListener('click', () => {

    const input = document.querySelector('.input')
    const inputText = input.value
    
    //remove error message if it exists
    if ( gridSizeForm.lastElementChild == warningMsg) gridSizeForm.removeChild(warningMsg)

    //Input validation w/ warning message
    if ( isNaN(inputText) || inputText < 1 || inputText > 100) {
        warningMsg.textContent = 'Oops! You must enter a number between 1 and 100 to create a grid.'
        
        warningMsg.classList.add('warning-msg')
        gridSizeForm.appendChild(warningMsg)
        return;
    }

    const size = inputText

    createEtchGrid(size)
    drawOnGrid()
})



//Clear and create new grid
function createEtchGrid(size) {
    const gridItemAmount = size ** 2
    const currentGridItems = document.querySelectorAll('.grid-item')

    currentGridItems.forEach((currentGridItem) => {
        etchASketch.removeChild(currentGridItem)
    })

    etchASketch.style.gridTemplateColumns = ''
    
    //Organize grid
    etchASketch.style.gridTemplateColumns = `repeat(${size}, 1fr)`

    //Create grid items
    for (let i = 0; i < gridItemAmount; i++) {
        const gridItem = document.createElement('div')

        gridItem.classList.add('grid-item')
        
        etchASketch.appendChild(gridItem)
    }

    //Eventually remove border when grid size >50
}

//Hovering a grid square changes background color
function drawOnGrid() {
    const gridItems = document.querySelectorAll('.grid-item')

    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black'
        })
    })
}

//Clear button empties grid colors



//Clicking a new color changes sketch color