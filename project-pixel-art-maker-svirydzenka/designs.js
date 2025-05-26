// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

//function make table with given dimensions width and height, and color by clicking cell
function makeGrid() {
	const gridWidth = document.getElementById("inputWidth").value;
	const gridHeight = document.getElementById("inputHeight").value;
	const table = document.getElementById("pixelCanvas");
	
	for (let h = 0; h < gridHeight ; h++) {        
		 let trRow = table.insertRow(h);
		 for (let w = 0; w < gridWidth; w++) {
			  let tdCell = trRow.insertCell(w);
			  tdCell.addEventListener("click", function(event) {
					const color = document.getElementById("colorPicker").value;
					tdCell.style.backgroundColor = color;
			  } )
		 }
	}
}


// function to clear cells
function clearGrid(){
	var table = document.getElementById("pixelCanvas");
	while (table.hasChildNodes()) {
		 table.removeChild(table.lastChild);
	}
} 


//major function that uses button submit to call makeGrid() funtion
document.addEventListener("submit", function(event) {
  event.preventDefault();
  clearGrid();
  makeGrid();
});
