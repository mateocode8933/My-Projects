const number = document.querySelector('.number');
const rollBtn = document.querySelector('.roll');

let walletMoney = document.querySelector('.wallet span');
const walletChange = document.querySelector(".wallet-change span")

const resultsPanel = [...document.querySelectorAll('.results div')];




const gameResults = [{
    wins: 0,
}, {
    losses: 0,
}, ]

let money = 1000;

const startGame = (e) => {
    const bid = document.getElementById('bid').value * 1;



    if (bid === '' || bid <= 0) return alert('Podaj Stawke!')
    else {

        if (bid > money) return alert('Nie masz wystarczajaco pieniedzy zeby pokryć stawkę!')

        else {

            let rolledNumber = Math.floor(Math.random() * 11);
            number.innerHTML = rolledNumber;




            if (rolledNumber <= 5) {
                money += bid;
                console.log('win');
                walletChange.innerHTML = `You Won $ ${bid}!`
                walletChange.style.color = 'green';

                if (rolledNumber === 5) {
                    money += bid * 300
                    walletChange.innerHTML = `You Won TRIPLE BID - $  ${bid}`
                }
                gameResults[0].wins += 1;
                resultsPanel[0].innerHTML = `Games Won ${gameResults[0].wins}`;
            }
            if (rolledNumber > 5) {
                money -= bid;
                console.log('lost');
                walletChange.innerHTML = `You Lost $ ${bid}!`
                walletChange.style.color = 'red';

                gameResults[1].losses += 1;
                resultsPanel[1].innerHTML = `Games Lost ${gameResults[1].losses}`;

            }
            resultsPanel[2].innerHTML = `Games Played: ${gameResults[0].wins + gameResults[1].losses}`
            walletMoney.textContent = money;

            if (money === 0) return alert('Game Over! You"ve lost all your money')

        }
    }
}




rollBtn.addEventListener('click', startGame);