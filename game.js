const rock = 1
const scissors = 2
const paper = 3

function gameStart()
    playRound();
    if rock > scissors{
        "Ganaste"
    }
        else if rock < paper{
            "Perdiste"
        }
        else if rock === rock{
            "Empate"
        }
    if paper > rock{
        "Ganaste"
    }
        else if paper < scissors{
            "Perdiste"
        }
        else if paper === scissors{
            "Empate"
        }
    if scissors > paper{
        "Ganaste"
    }
        else if scissors < rock{
            "Perdiste"
        }
        else if scissors === scissors{
            "Empate"
        }
    }

function computerPlay(min, max){
    Math.floor(Math.random(1, 3));
}

function playerSelection()

function playRound(){
    if (computerPlay() === 1){
        rock;
    }
        if (computerPlay() === 2){
            scissors;
        }
        else { 
            paper;
        }
            }