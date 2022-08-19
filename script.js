/*
Here is the initial attempt to make a grid in DOM,
but it feels like an unneccessary complication,
so I'l redoit in a more traditional manner.ß

const buttonGrid = document.querySelector('.buttonGrid');

function createGrid(dimension) {
    for ( let i = 0; i < dimension*dimension; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `calc(100% / ${dimension})`;
        cell.style.height = `calc(100% / ${dimension})`;

        cell.addEventListener('click', () => {
        cell.style.backgroundColor =  'grey' ; 
        })
        
        buttonGrid.appendChild(cell);
    }
}
createGrid(4);*/


// functii pentru mai tarziu
//trebuie puse conditii

const add = (a , b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? "ce-ai facut veric? ai distrus planeta" : a/b ;
console.log(divide(9,3));


//incomplet
function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a, b);

    }
}