const etchASketch = document.querySelector('.etch-a-sketch')
const submit = document.querySelector('.submit')
const gridSizeForm = document.querySelector('.grid-size')
const clearBtn = document.querySelector('.btn-clear')
const colorBtns = document.querySelectorAll('.btn-color')

const warningMsg = document.createElement('div')

const defaultGridSize = 16

//Create grid
window.onload = createEtchGrid(defaultGridSize)
let selectedColor = 'black'

selectedColor = selectColor()

createNewGrid()
clearGrid()
drawOnGrid(selectedColor)



//Grid size submissions
function createNewGrid() {
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
        clearGrid()
    })
}

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
function clearGrid() {
    const gridItems = document.querySelectorAll('.grid-item')

    clearBtn.addEventListener('click', () => {
        gridItems.forEach((gridItem) => {
            gridItem.style.backgroundColor = 'white'
            gridItem.style.opacity = '1'
        })
    })
}

//Clicking a new color changes sketch color
function selectColor() {
    colorBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            return e.target.value
        })
    })
}