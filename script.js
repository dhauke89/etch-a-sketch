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

        //Append cell to the container
        container.appendChild(newCell);
    }
}

// Draw the initial grid
drawGrid(16);

// Add an event listener to the continaer to handle mouseover events
container.addEventListener("mouseover", function(e){
    // Check if the mouseover event happened on a cell element
    if(e.target.classList.contains("cell")){
        let opacity = parseFloat(e.target.style.opacity || "0");
        opacity = Math.min(opacity + 0.1, 1);
        let randomColor = Math.floor(Math.random()*16777215).toString(16); //opted to generate a random hex code instead of seperate rgb for simplicity sake.
        e.target.style.backgroundColor = "#" + randomColor;
        e.target.style.opacity = opacity;
    }
});

/**
 * Updates the grid size based on the given size value.
 * 
 * @param {number} size - The new size of the grid (rows and columns) 
 */
function updateGridSize(size){
    // Calculate the percentage each cell should occupy to fit in a row
    const cellPercentage = 100 / size;

    //Update the CSS variable to adjust the cell size
    document.documentElement.style.setProperty('--cell-percentage', `${cellPercentage}%`);
    
    // Redraw the grid with the new size.
    drawGrid(size);
}

// Grab the button to trigger the grid change
const changeButton = document.querySelector("#change-grid");

// Add the event listener to the button
changeButton.addEventListener("click", function() {
    // Continuously prompt the user until a new size is entered.
    while(true){
        newSize = parseInt(prompt("Please select a new grid size (between 1 and 100"));
        
        // Check that the new number is a valid entry.
        if(Number.isInteger(newSize) && newSize > 0 && newSize <= 100){
            updateGridSize(newSize);
            break;
        }else{
            alert("Invalid entry, please enter a whole number between 1 and 100.");
        }
    }
})