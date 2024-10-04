// Get the container element where the grid will be drawn
const container = document.querySelector("#container");

/**
 * Works with CSS to draw a 16 x 16 (or otherwise specified) grid of cells within the container.
 */

function drawGrid(size){
    container.innerHTML="";
    let totalCells = size * size;
    // Create the specified number of cells
    for(let i = 0; i < totalCells; i++){
        const newCell = document.createElement("div");
        newCell.setAttribute("class","cell");
        newCell.setAttribute("id",`cell${i}`); // Set a unique ID for each cell
        container.appendChild(newCell);
    }
}

// Draw the initial grid
drawGrid(16);

// Add an event listener to the continaer to handle mouseover events
container.addEventListener("mouseover", function(e){
    // Check if the mouseover event happened on a cell element
    if(e.target.classList.contains("cell")){
        e.target.classList.toggle("colored"); // Toggle the 'colored' class as the mouse enters the cell
    }
});

/**
 * Updates the grid size based on the given size value.
 * 
 * @param {number} size - The new size of the grid (rows and columns) 
 */
function updateGridSize(size){
    const cellPercentage = 100 / size;
    document.documentElement.style.setProperty('--cell-percentage', `${cellPercentage}%`);
    drawGrid(size);
}

const changeButton = document.querySelector("#change-grid");

changeButton.addEventListener("click", function() {
    while(true){
        newSize = parseInt(prompt("Please select a new grid size (between 1 and 100"));
        if(Number.isInteger(newSize) && newSize > 0 && newSize <= 100){
            updateGridSize(newSize);
            break;
        }else{
            alert("Invalid entry, please enter a whole number between 1 and 100.");
        }
    }
})