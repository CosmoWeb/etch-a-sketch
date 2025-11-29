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

function colorSquare(){
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
    square.addEventListener("mouseover", () =>{
    square.classList.add('colorSquare');
    });
});
}
createGrid(16);
colorSquare();

const btn = document.querySelector("#canvas");
btn.addEventListener("click", () => {
    size = prompt("Choose a size equal or less than 100.");
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    createGrid(size);
    colorSquare();
});





