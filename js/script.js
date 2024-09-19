mySpan = document.getElementById("image-grid");

for (let j = 0; j < 5; j++) {
    let newSpan = document.createElement('span');
    newSpan.setAttribute("class", "image-row");
    for (let i = 1; i < 6; i++) {
        let newBabby = document.createElement('img');
        newBabby.setAttribute("src", `images/A${i}.png`)
        newSpan.appendChild(newBabby);
    }
    mySpan.appendChild(newSpan);
}