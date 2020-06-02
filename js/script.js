const cardSuits = ["clubs", "spades", "hearts", "diamonds"];
const numberOfJokers = 2;

function numberedCardGridSlot () {
    this.cards = [];
    this.connectedRoyalCardGridSlots = [];
  };
  
// Game Manager
const gameManager = {
  state: "setup",
  // Generate a blank grid for number cards and link to them the royal card slots that they are able to attack.
  numberCardGrid: [],
  generateNumberedCardGrid: function () {
    this.numberCardGrid[0] = new numberedCardGridSlot();
    this.numberCardGrid[0].connectedRoyalCardGridSlots = [4, 9];
    this.numberCardGrid[1] = new numberedCardGridSlot();
    this.numberCardGrid[1].connectedRoyalCardGridSlots = [10];
    this.numberCardGrid[2] = new numberedCardGridSlot();
    this.numberCardGrid[2].connectedRoyalCardGridSlots = [3, 11];
    this.numberCardGrid[3] = new numberedCardGridSlot();
    this.numberCardGrid[3].connectedRoyalCardGridSlots = [6];
    this.numberCardGrid[4] = new numberedCardGridSlot();
    this.numberCardGrid[4].connectedRoyalCardGridSlots = [];
    this.numberCardGrid[5] = new numberedCardGridSlot();
    this.numberCardGrid[5].connectedRoyalCardGridSlots = [5];
    this.numberCardGrid[6] = new numberedCardGridSlot();
    this.numberCardGrid[6].connectedRoyalCardGridSlots = [0, 8];
    this.numberCardGrid[7] = new numberedCardGridSlot();
    this.numberCardGrid[7].connectedRoyalCardGridSlots = [1];
    this.numberCardGrid[8] = new numberedCardGridSlot();
    this.numberCardGrid[8].connectedRoyalCardGridSlots = [2, 7];
  },
  populateNumberedCardGrid: function () {
    for(let i = 0; i < this.numberCardGrid.length; i++)
    {
        while(this.numberCardGrid[i].cards.length === 0)
        {
            let cardToPlace = deck.drawCard();
            if (cardToPlace.value === 0) {
                jokerDeck.cards.push(cardToPlace);
              } else if (cardToPlace.value === 1) {
                acesDeck.cards.push(cardToPlace);
              } else if (cardToPlace.value > 10) {
                hand.cards.push(cardToPlace);
              } else {
                this.numberCardGrid[i].cards.push(cardToPlace);
              }
        }
    }
  },
};

let hand = {
  cards: [],
};

let jokerDeck = {
  cards: [],
};
let acesDeck = {
  cards: [],
};


// Deck
let deck = {
  cards: [],
  shuffle: function () {
    //fisher-yates shuffle
    for (let i = deck.cards.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let firstCard = deck.cards[i];
      let secondCard = deck.cards[randomIndex];
      deck.cards[i] = secondCard;
      deck.cards[randomIndex] = firstCard;
    }
  },
  drawCard: function () {
    if (this.cards.length > 0) {
        return this.cards.pop();
    } else {
      console.log("No cards left in deck");
    }
  },
  initialise: function () {
    let card;
    for (let i = 0; i < cardSuits.length; i++) {
      for (let j = 1; j < 14; j++) {
        if (j === 1) {
          card = new aceCard();
          card.value = j;
          card.suit = cardSuits[i];
          card.cardType = "ace";
        } else if (j > 1 && j < 11) {
          card = new numberCard();
          card.value = j;
          card.suit = cardSuits[i];
          card.cardType = "numbered";
        } else {
          card = new royalCard();
          card.value = j;
          card.health = j;
          card.suit = cardSuits[i];
          card.cardType = "royal";
        }

        this.cards.push(card);
      }
    }

    for (let i = 0; i < numberOfJokers; i++) {
      card = new jokerCard();
      card.suit = "joker";
      card.cardType = "joker";
      this.cards.push(card);
    }
  },
};

// Card Variables
let generalCardProperties = {
  suit: "",
  value: 0,
  canBeMoved: "false",
  cardType: "",
};
let royalCardProperties = {
  armor: 0,
  health: 0,
};

// Card Functions
function moveCard() {
  return {
    moveCard: () => console.log("the card moved"),
  };
}
function placeCard() {
  return {
    placeCard: () => console.log("the card placed"),
  };
}
function selectCard() {
  return {
    selectCard: () => console.log("the card was selected"),
  };
}

// Card Composite Objects
function numberCard() {
  return {
    ...generalCardProperties,
    ...moveCard(),
    ...placeCard(),
    ...selectCard(),
  };
}
function royalCard() {
  return {
    ...generalCardProperties,
    ...royalCardProperties,
    ...moveCard(),
    ...placeCard(),
    ...selectCard(),
  };
}
function aceCard() {
  return {
    ...generalCardProperties,
    ...moveCard(),
    ...placeCard(),
    ...selectCard(),
  };
}
function jokerCard() {
  return {
    ...generalCardProperties,
    ...moveCard(),
    ...placeCard(),
    ...selectCard(),
  };
}

deck.initialise();
deck.shuffle();
gameManager.generateNumberedCardGrid();
gameManager.populateNumberedCardGrid();
console.log("Deck");
console.log(deck.cards);
console.log("Number Grid");
console.log(gameManager.numberCardGrid);
console.log("Hand");
console.log(hand.cards);
console.log("Aces")
console.log(acesDeck.cards);
console.log("Jokers");
console.log(jokerDeck.cards);

$(document).on("keypress", function (e) {
  if (String.fromCharCode(e.which) === "d") {
    deck.drawCard();
  }
});
