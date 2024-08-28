//Para saber se o documento já foi carregado. Se foi, acontece o que tá dentro dessa função.
document.addEventListener('DOMContentLoaded',() =>{

    //Para pegar todos os elementos do tabuleiro
    let squares = document.querySelectorAll(".square")

    //Para cada elemento vai add um evento de listener para saber se foi clicado
    squares.forEach((square) => {
        square.addEventListener('click', handleClick)
    })

})

function handleClick(event){

    let square = event.target
    let position = square.id

    handleMove(position)
    updateSquares()
}

function updateSquares(){
    let squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        let position = square.id
        let symbol = board[position]

        if(symbol != ''){
            square.innerHTML = `<div class="${symbol}"> </div>`
        }
    })
}

