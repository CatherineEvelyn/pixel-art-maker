window.onload = basicGrid();

function basicGrid() {
    const canvas = document.getElementById("container");
    let  theBox = "";
    for(let canvasSize = 0; canvasSize < 3*3; canvasSize++) {
        theBox = document.createElement('div');
        theBox.className = "box";
        theBox.setAttribute("id", canvasSize);
        theBox.addEventListener('click', changeColor);
        canvas.appendChild(theBox);        
    }
}

function changeColor() {
    let holdId = this.id;
    let selectedBox = document.getElementById(holdId);
    selectedBox.setAttribute("class", "current-color");
}
