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

const calculatorScreen = document.querySelector('.calculator-screen');
const numberButtons = document.querySelectorAll('.num');

const add = (a , b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b === 0 ? "ce-ai facut veric? ai distrus planeta" : a/b ;



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
/*Create the functions that populate the display 
when you click the number buttons. 
You should be storing the ‘display value’ in a variable
 somewhere for use in the next step.*/

 function display(e){
    const val = e.target.value;
    console.log(val);
    calculatorScreen.value += val;
 }

 numberButtons.forEach(btn => {
    btn.addEventListener('click', display);
});
