const etchASketch = document.querySelector('.etch-a-sketch')
const submit = document.querySelector('.submit')
const gridSizeForm = document.querySelector('.grid-size')
const clearBtn = document.querySelector('.btn-clear')
const colorBtns = document.querySelectorAll('.btn-color')

const warningMsg = document.createElement('div')

const defaultGridSize = 16

//Create grid
window.onload = createEtchGrid(defaultGridSize)

createNewGrid()
clearGrid()
drawOnGrid()



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

    let color = 'black'

    //Listen for color button click
    colorBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            color = e.target.value
        })
    })

    //Colors the box based on the selected color
    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', (e) => {
            if ( color == 'opacity') {
                if ( e.target.style.backgroundColor != 'black') {
                    e.target.style.opacity = 0
                }

                e.target.style.backgroundColor = 'black'

                if ( e.target.style.opacity < 1 ) {
                    e.target.style.opacity = (parseFloat(e.target.style.opacity) + .1)
                } 
            } else {
                e.target.style.backgroundColor = color
            }
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

