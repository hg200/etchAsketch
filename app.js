const container = document.querySelector(".grid");
const btn = document.querySelector("button");

function createGrid() {

    const size = 16;
    const sideLength = 500;
    const cellH = sideLength / size + "px";
    const cellW = sideLength / size + "px";
    let count = 1;
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            console.log(j);
            const cell = document.createElement("div");
            cell.innerHTML = count;
            count++;
            //cell.style.backgroundColor = "red";
            cell.style.height = `${cellH}`;
            cell.style.width = `${cellW}`;
            //cell.style.borderStyle = "solid";
            cell.addEventListener("mouseover", changeColor);
            cell.addEventListener("mousedown", changeColor);
            container.appendChild(cell).className = "cell";
        }
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = "green";
}

btn.addEventListener("click", () => {
    window.location.reload();
})
createGrid();