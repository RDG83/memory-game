let score = document.getElementById("score");
score.textContent = 6;

const grid = document.querySelector(".grid-container");

let cardArray = [
    {
        name: "apple",
        img: "images/apple.png"
    },
    {
        name: "apple",
        img: "images/apple.png"
    },
    {
        name: "bananas",
        img: "images/bananas.png"
    },
    {
        name: "bananas",
        img: "images/bananas.png"
    },
    {
        name: "cherries",
        img: "images/cherries.png"
    },
    {
        name: "cherries",
        img: "images/cherries.png"
    },
    {
        name: "citron",
        img: "images/citron.png"
    },
    {
        name: "citron",
        img: "images/citron.png"
    },
    {
        name: "grapes",
        img: "images/grapes.png"
    },
    {
        name: "grapes",
        img: "images/grapes.png"
    },
    {
        name: "pear",
        img: "images/pear.png"
    },
    {
        name: "pear",
        img: "images/pear.png"
    },
    {
        name: "strawberry",
        img: "images/strawberry.png"
    },
    {
        name: "strawberry",
        img: "images/strawberry.png"
    },
    {
        name: "watermelon",
        img: "images/watermelon.png"
    },
    {
        name: "watermelon",
        img: "images/watermelon.png"
    }
];

let chosenCards = [];
let chosenCardsId = [];
let matches = [];

function checkMatch() {
    let cards = document.querySelectorAll('img');
    let optionOne = chosenCardsId[0];
    let optionTwo = chosenCardsId[1];

    if (chosenCards[0] === chosenCards[1]) {
        cards[optionOne].setAttribute('src', 'images/white_tile.png')

        cards[optionTwo].setAttribute('src', 'images/white_tile.png')
        matches.push(chosenCards);
        console.log("matches", matches)
        if (matches.length === cardArray.length / 2) {
            score.textContent = "You have guessed all and completed the game"
        }
    } else {
        cards[optionOne].setAttribute('src', 'images/background.png')

        cards[optionTwo].setAttribute('src', 'images/background.png')
    }
    chosenCards = [];
    chosenCardsId = [];
}

function startGame() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'images/background.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipcard);
        grid.appendChild(card);
    }
}

function flipcard() {
    let cardId = this.getAttribute('data-id');

    chosenCards.push(cardArray[cardId].name);
    chosenCardsId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    console.log(chosenCards);
    console.log(chosenCardsId);
    if (chosenCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

startGame();


