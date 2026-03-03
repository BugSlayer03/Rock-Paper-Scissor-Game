const score = {
    wins: 0,
    losses: 0,
    ties: 0
};

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        // buttonElement1.addEventListener('keydown', eventListener1);
        const randomNumber = Math.random()
        if (randomNumber >= 0 && randomNumber < 1 / 3) {
            score.ties++;
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }

        else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
            score.losses++;
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }

        else {
            score.wins++;
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }
    }

    else if (event.key === 'p') {
        // buttonElement2.addEventListener('keydown', eventListener2);
        const randomNumber2 = Math.random()
        if (randomNumber2 >= 0 && randomNumber2 < 1 / 3) {
            score.wins++;
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }

        else if (randomNumber2 >= 1 / 3 && randomNumber2 < 2 / 3) {
            score.ties++;
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }

        else {
            score.losses++;
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }
    }

    else if (event.key === 's') {
        // buttonElement3.addEventListener('keydown', eventListener3);
        const randomNumber3 = Math.random()
        if (randomNumber3 >= 0 && randomNumber3 < 1 / 3) {
            score.losses++;
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }

        else if (randomNumber3 >= 1 / 3 && randomNumber3 < 2 / 3) {
            score.wins++;
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }

        else {
            score.ties++;
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }
    }

    else if (event.key === 'Backspace') {
        score.wins = 0; score.losses = 0; score.ties = 0; document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }
})

document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;