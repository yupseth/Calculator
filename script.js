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