let h2 = document.querySelector("h2");

function generateColor() {
    let r = Math.floor((Math.random() * 255) + 1);
    let g = Math.floor((Math.random() * 255) + 1);
    let b = Math.floor((Math.random() * 255) + 1);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function changebkg() {
    let myColor = generateColor();
    h2.innerHTML = "Color generated: " + myColor;
    document.querySelector("#secondary-div").style.backgroundColor = myColor;
}

changebkg();