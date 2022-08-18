const buttonGrid = document.querySelector('.buttonGrid');

function createGrid(dimension) {
    for ( let i = 0; i < dimension*dimension; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `calc(100% / ${dimension})`;
        cell.style.height = `calc(100% / ${dimension})`;

        /*cell.addEventListener('click', () => {
        cell.style.backgroundColor =  'grey' ; 
        })*/
        
        buttonGrid.appendChild(cell);
    }
}
createGrid(4);

// functii pentru mai tarziu

const add = (a , b) => a + b;
const subtract = (a, b) => a = b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
