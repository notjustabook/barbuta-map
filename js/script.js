let mySpan = document.getElementById("image-grid");
let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const funky = function (id) {
    let clickedOverlay = document.getElementById(`overlay-${id}`);
    clickedOverlay.style.visibility = 'visible';
}

for (let j = 0; j < 8; j++) {
    let newSpan = document.createElement('span');
    newSpan.setAttribute("class", "image-row");
    for (let i = 1; i < 9; i++) {
        let id = `${alphabet[j]}${i}`;

        let imgWrapper = document.createElement('span');
        imgWrapper.setAttribute("class", "map-piece");

        let imageTile = document.createElement('img');
        imageTile.setAttribute("src", `images/${id}.png`);
        imageTile.setAttribute("class", "blurred");
        imageTile.setAttribute("id", id)
        imageTile.onclick = function () {
            funky(id);
        }

        let overlay = document.createElement('div');
        overlay.setAttribute("class", "overlay");
        overlay.setAttribute("id", `overlay-${id}`)
        overlay.style.visibility = 'hidden'

        imgWrapper.appendChild(imageTile);
        imgWrapper.appendChild(overlay);
        newSpan.appendChild(imgWrapper);
    }
    mySpan.appendChild(newSpan);
}