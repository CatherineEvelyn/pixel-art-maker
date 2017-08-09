window.onload = basicGrid();
var selectedColor = "black";

function basicGrid() {
    const canvas = document.getElementById("container");
    let theBox = "";
    for(let canvasSize = 0; canvasSize < 64*64; canvasSize++) {
        theBox = document.createElement('div');
        theBox.className = "box";
        theBox.setAttribute("id", canvasSize);
        theBox.addEventListener('click', grabLocation);
        canvas.appendChild(theBox);        
    }
    renderPalette();
}

function renderPalette() {
    const paletteObj = document.getElementById("palette");
    let colorOption = "";
    for(let option = 0; option < 10; option++) {
        colorOption = document.createElement('div');
        colorOption.className = "pen";
        if (option == 0) {colorOption.style.backgroundColor = "aqua"; colorOption.setAttribute("id", "aqua");}
        else if (option == 1) {colorOption.style.backgroundColor = "yellow"; colorOption.setAttribute("id", "yellow");}
        else if (option == 2) {colorOption.style.backgroundColor = "cornflowerblue"; colorOption.setAttribute("id", "cornflowerblue");}
        else if (option == 3) {colorOption.style.backgroundColor = "darkorange"; colorOption.setAttribute("id", "darkorange");}
        else if (option == 4) {colorOption.style.backgroundColor = "deeppink"; colorOption.setAttribute("id", "deeppink");}
        else if (option == 5) {colorOption.style.backgroundColor = "blueviolet"; colorOption.setAttribute("id", "blueviolet");}
        else if (option == 6) {colorOption.style.backgroundColor = "darkred"; colorOption.setAttribute("id", "darkred");}
        else if (option == 7) {colorOption.style.backgroundColor = "springgreen"; colorOption.setAttribute("id", "springgreen");}
        else if (option == 8) {colorOption.style.backgroundColor = "white"; colorOption.setAttribute("id", "white");}
        else if (option == 9) {colorOption.style.backgroundColor = "black"; colorOption.setAttribute("id", "black");}
        else {colorOption.style.backgroundColor = "dimGrey";}
        colorOption.addEventListener('click', grabSelectedColor);
        paletteObj.appendChild(colorOption);
    }
    const textDescription = document.createElement("div");
    textDescription.innerHTML = "CURRENT COLOR: ";
    textDescription.style.float = "left";
    paletteObj.appendChild(textDescription);
    let colorIndicator = document.createElement("div");
    colorIndicator.setAttribute("id", "currentColor");
    paletteObj.appendChild(colorIndicator);
}

function grabSelectedColor() {
    selectedColor = this.id;
    document.getElementById("currentColor").style.backgroundColor = selectedColor;
}

function grabLocation() {
    let holdId = this.id;
    let selectedBox = document.getElementById(holdId); 
    selectedBox.style.backgroundColor = selectedColor;
}
