const cardSuits = ["clubs", "spades", "hearts", "diamonds"];
const numberOfJokers = 2;
let drawnCard;

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
      if(this.cards.length > 0)
      {
        if(!drawnCard)
        {
            drawnCard = this.cards.pop();
            console.log(drawnCard);
        }
        else
        {
            console.log("Card already in hand, cant draw another");
        }

      }
      else
      {
          console.log("No cards left in deck")
      }
    
  },
  initialise: function () {
    let card;
    for (let i = 0; i < cardSuits.length; i++) {
      for (let j = 1; j < 14; j++) {
        if (j === 1) {
          card = new aceCard();
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

$(document).on("keypress", function (e) {
    if(String.fromCharCode(e.which) === "d")
    {
        deck.drawCard();
    }
});


