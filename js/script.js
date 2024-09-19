mySpan = document.getElementById("image-grid");
let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

for (let j = 0; j < 8; j++) {
    let newSpan = document.createElement('span');
    newSpan.setAttribute("class", "image-row");
    for (let i = 1; i < 9; i++) {
        let newBabby = document.createElement('img');
        newBabby.setAttribute("src", `images/${alphabet[j]}${i}.png`)
        newSpan.appendChild(newBabby);
    }
    mySpan.appendChild(newSpan);
}