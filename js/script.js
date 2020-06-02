const cardSuits = ["clubs", "spades", "hearts", "diamonds"];
const deck = [];
const numberOfJokers = 2;

function createDeck() {
  let card;
  for (let i = 0; i < cardSuits.length; i++) {

    for(let j = 1; j < 14 ; j ++)
    {
        if(j === 1){
            card = new aceCard();
            card.value = j;
            card.suit = cardSuits[i];
            card.cardType = "ace";
        }
        else if(j > 1 && j < 11)
        {
            card = new numberCard;
            card.value = j;
            card.suit = cardSuits[i];
            card.cardType = "numbered";
        }
        else
        {
            card = new royalCard;
            card.value = j;
            card.suit = cardSuits[i];
            card.cardType = "royal";
        }

        deck.push(card);
    }
  }

  for(let i = 0 ; i <  numberOfJokers; i ++)
  {
      card = new jokerCard();
      card.cardType =  "joker";
      deck.push(card);
  }

}

let generalCardProperties = {
  suit: "",
  value: 0,
  canBeMoved: "false",
  cardType: ""
};

let royalCardProperties = {
  armor: 0,
  health: 0,
};

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

createDeck();
console.log(deck);