import {
    NoteOverlay
} from "./model/noteOverlay.js";

let overlay = new NoteOverlay(false, "This is a note!");

overlay.visibility ? console.log("ye!") : console.log("ne");
let overyLay = document.getElementById('note-overlay');
overyLay.style.visibility = 'hidden';


let imageGrid = document.getElementById("image-grid");
let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const funky = function (id) {
    overyLay.style.visibility = 'visible';
    let overlayTextbox = document.createElement('h1');
    overlayTextbox.setAttribute("id", "overlay-text")
    overlayTextbox.appendChild(document.createTextNode(id));
    document.getElementById("note-overlay").appendChild(overlayTextbox);
}



for (let j = 0; j < 8; j++) {
    let newSpan = document.createElement('span');
    newSpan.setAttribute("class", "image-row");
    for (let i = 1; i < 9; i++) {
        let id = `${alphabet[j]}${i}`;

        let imgWrapper = document.createElement('span');
        imgWrapper.setAttribute("class", "map-piece");

        let imageTile = createImageElement(id);

        imgWrapper.appendChild(imageTile);
        newSpan.appendChild(imgWrapper);
    }
    imageGrid.appendChild(newSpan);
}

function createImageElement(id) {
    let imageTile = document.createElement('img');
    imageTile.setAttribute("src", `images/${id}.png`);
    imageTile.setAttribute("id", id)
    imageTile.onclick = function () {
        funky(id);
    }
    return imageTile
}

let closeButton = document.getElementById("close-button");
closeButton.onclick = close;


function close() {
    let noteOverlay = document.getElementById("note-overlay");
    let textbox = document.getElementById("overlay-text");
    noteOverlay.removeChild(textbox);
    noteOverlay.style.visibility = 'hidden';
}