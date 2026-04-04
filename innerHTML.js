// Official game play functionality

function updateText() {
    document.getElementById("the-head").innerHTML = "Time to Crush, Cover, and Cut!"
}


const options = ["crush", 'cover', 'cut'];
const human = document.getElementById('human');
const computer = document.getElementById('computer');
const winner = document.getElementById('winner');
const scores = document.getElementsByClassName('scores');




function playtime(gameChoices) {
    const computerPlay = options[Math.floor(Math.random() * 3)];
    let result = '';
    if(humanPlay == computerPlay){
        result = 'TIED UP!';
    }
    else {
        switch(humanPlay) {
            case 'crush':
                result = (computerPlay === 'cut') ? 'WINNER!' : 'LOSER!';
                break;
            case 'cut':
                result = (computerPlay === 'cover') ? 'WINNER!' : 'LOSER!';
                break;
            case 'cover':
                result = (computerPlay === 'cut') ? 'WINNER!' : 'LOSER!';
                break;
        }
    }

    human.textContent = 'You: '(humanPlay);
    computer.textContent = 'AI: '(computerPlay);
    winner.textContent = 'And the winner is: '(result);

}
