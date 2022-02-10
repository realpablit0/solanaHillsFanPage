const cardsArray = [{
    'name': 'nft1',
    'img': 'https://media.discordapp.net/attachments/770963661686177793/940955992508747776/IMG_8888.png?width=609&height=609',
},
{
    'name': 'nft2',
    'img': 'https://media.discordapp.net/attachments/770963661686177793/940956034128830574/IMG_8858.png?width=609&height=609',
},
{
    'name': 'nft3',
    'img': 'https://media.discordapp.net/attachments/770963661686177793/940956097139847198/C1DAD50F-A41B-478E-BC59-FBB8F7E3B85F.png?width=609&height=609',
},
{
    'name': 'nft4',
    'img': 'https://media.discordapp.net/attachments/770963661686177793/940956131096932373/IMG_8861.png?width=609&height=609',
},
{
    'name': 'nft5',
    'img': 'https://media.discordapp.net/attachments/770963661686177793/940956165137924186/IMG_8869.png?width=609&height=609',
},
{
    'name': 'nft6',
    'img': 'https://media.discordapp.net/attachments/770963661686177793/940956252572364820/Temp_NO.png?width=609&height=609',
},
{
    'name': 'nft7',
    'img': 'https://media.discordapp.net/attachments/770963661686177793/940956330917777468/IMG_8883.png?width=609&height=609',
},
{
    'name': 'nft28',
    'img': 'https://media.discordapp.net/attachments/770963661686177793/940956410202710036/E86A9E0D-519B-4197-B71C-90E96F17786F.png',
},
{
    'name': 'nft9',
    'img': 'https://media.discordapp.net/attachments/770963661686177793/940956442729525288/A11B590D-934C-483B-ACFF-14A6D57490D8.png',
},
{
    'name': 'nft10',
    'img': 'https://media.discordapp.net/attachments/770963661686177793/940956480587329566/26688988-2E2A-467A-8F77-5BEA806079E9.png',
},
{
    'name': 'nft11',
    'img': 'https://media.discordapp.net/attachments/770963661686177793/940956520512913469/IMG_8910.png?width=609&height=609',
},
{
    'name': 'nft12',
    'img': 'https://media.discordapp.net/attachments/770963661686177793/940956608769450004/IMG_8954.png?width=609&height=609',
},
];
let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;
let matches = 0
const game = document.getElementById('game');
const grid = document.createElement('section');
var gameGrid = cardsArray
    .concat(cardsArray)
    .sort(() => 0.5 - Math.random());

restartGame()

function restartGame() {
    grid.innerHTML = ''
    gameGrid = cardsArray
        .concat(cardsArray)
        .sort(() => 0.5 - Math.random());
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;
    delay = 1200;
    matches = 0

    grid.setAttribute('class', 'grid');
    game.appendChild(grid);

    gameGrid.forEach(item => {
        const { name, img } = item;

        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.name = name;

        const front = document.createElement('div');
        front.classList.add('front');

        const back = document.createElement('div');
        back.classList.add('back');
        back.style.backgroundImage = `url(${img})`;

        grid.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);
    });
}
const match = () => {
    matches++
    const selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
        card.classList.add('match');
    });
    if (matches === gameGrid.length / 2) {
        setTimeout(() => {
            restartGame()
        }, 3000)
    }
};

const resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;
    previousTarget = null;

    var selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
        card.classList.remove('selected');
    });
};

grid.addEventListener('click', event => {

    const clicked = event.target;

    if (
        clicked.nodeName === 'SECTION' ||
        clicked === previousTarget ||
        clicked.parentNode.classList.contains('selected') ||
        clicked.parentNode.classList.contains('match')
    ) {
        return;
    }

    if (count < 2) {
        count++;
        if (count === 1) {
            firstGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        } else {
            secondGuess = clicked.parentNode.dataset.name;
            clicked.parentNode.classList.add('selected');
        }

        if (firstGuess && secondGuess) {
            if (firstGuess === secondGuess) {
                setTimeout(match, delay);
            }
            setTimeout(resetGuesses, delay);
        }
        previousTarget = clicked;
    }

});