const container = document.querySelector('.container');

function createGrid(size){
    if(size <= 100){
        for(let i = 0; i < (size**2); i++){
        const square = document.createElement("div");
        square.setAttribute('class', 'square');
        square.setAttribute(`style`, `width: ${960 / size}px; height: ${960 / size}px;`);
        container.appendChild(square);
        }
    }else{
        alert("Size is too big.")
    }
    
}

createGrid(16);
const squares = document.querySelectorAll('.square');
const square = squares.forEach((square) => {
    square.addEventListener("mouseover", () =>{
        square.classList.add('colorSquare');
    });
});

const btn = document.querySelector("#canvas");
btn.addEventListener("click", () => {
    size = prompt("Choose a size equal or less than 100.");
    createGrid(size);
});