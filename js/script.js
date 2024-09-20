let mySpan = document.getElementById("image-grid");
let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const funky = function (id) {
    console.log("Do a thang!");
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
    mySpan.appendChild(newSpan);
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