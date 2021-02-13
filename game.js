let rock = 1
let scissors = 2
let paper = 3

function computerPlay(min, max){
    Math.floor(Math.random(1, 3));
}

function playRound(){
    prompt("Desafio: piedra, papel o tijeras", "ingrese su elección aquí")
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