//Contêm a lógica do jogo

//Iniciando as variáveis
let board = ['','','','','','','','',''] // Todos os espaços do tabuleiro. Começam vazios, mas podem adquirir x ou o
let playerTime = 0; // Ele usou 0 e 1 porque são as posições no array de símbolos.
let symbols = ['o', 'x']
let gameOver = true

function handleMove(position){
    
    if(gameOver){ // Para não deixar mais jogar se tiver acabado o jogo
        return
    }

    if(board[position] == ''){   // Para se o espaço já estiver preenchido, ele não alterar mais.  
        board[position] = symbols[playerTime]
        
        gameOver = isWin() //Para verificar se alguém ganhou

        if(!gameOver){ // Só passa a vez pro próximo jogador se não tiver um vencedor.
            if(playerTime == 0){
                playerTime = 1
            } else {
                playerTime = 0
            }
        }
        
    }

    return gameOver
}

function isWin(){

    let winStates = [
    //horizontais
        [0,1,2], 
        [3,4,5],
        [6,7,8],
    //verticais
        [0,3,6],
        [1,4,7],
        [2,5,8],
    //diagonais    
        [0,4,8],
        [2,4,6]
    ]

    for(let i = 0; winStates.length; i++){
        let seq = winStates[i]

        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ''){
            //o vazio é pra que no início quando todos são vazios não dê true
            return true
        }
    }
    return false
}