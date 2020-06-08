const cardSuits = ["clubs", "spades", "hearts", "diamonds"];
const numberOfJokers = 2;

function numberedCardGridSlot() {
  this.cards = [];
  this.oppositeRoyalCardGridSlots = [];
  this.adjacentRoyalGridSlots = [];
  this.element = [];
}

class gridSlot {
  constructor() {
    this.cards = [],
    this.element,
    this.topCardElement,
    this.overlayElement
  }

  updateCardVisuals() {
    if (this.cards.length > 0) {
      this.topCardElement.classList.remove("hide-element");
      this.topCardElement
        .getElementsByTagName("svg")[0]
        .getElementsByTagName(
          "text"
        )[0].textContent = `${this.cards[0].cardValue} of ${this.cards[0].suit}`;
    } else {
      this.topCardElement.classList.add("hide-element");
    }
  }
}

class royalCardGridSlot extends gridSlot{

}

let royalCardGrid = [];

let cardInHand;

const gameManager = {
  state: "setup",

  numberCardGrid: [],
  handSetup: function () {
    hand = new gridSlot();
    hand.element = Array.from($("#hand"))[0];
    hand.topCardElement = hand.element.getElementsByClassName(
      "card"
    )[0];
  },
  generateNumberedCardGrid: function () {
    let numberedCardGridSlotElements = $(".card-slot-numbered");
    this.numberCardGrid[0] = new numberedCardGridSlot();
    this.numberCardGrid[0].connectedRoyalCardGridSlots = [4, 9];
    this.numberCardGrid[0].adjacentRoyalGridSlots = [0, 3];
    this.numberCardGrid[0].element = numberedCardGridSlotElements[0];

    this.numberCardGrid[1] = new numberedCardGridSlot();
    this.numberCardGrid[1].connectedRoyalCardGridSlots = [10];
    this.numberCardGrid[1].adjacentRoyalGridSlots = [1];
    this.numberCardGrid[1].element = numberedCardGridSlotElements[1];
    this.numberCardGrid[2] = new numberedCardGridSlot();
    this.numberCardGrid[2].connectedRoyalCardGridSlots = [3, 11];
    this.numberCardGrid[2].adjacentRoyalGridSlots = [2, 4];
    this.numberCardGrid[2].element = numberedCardGridSlotElements[2];
    this.numberCardGrid[3] = new numberedCardGridSlot();
    this.numberCardGrid[3].connectedRoyalCardGridSlots = [6];
    this.numberCardGrid[3].connectedRoyalCardGridSlots = [5];
    this.numberCardGrid[3].element = numberedCardGridSlotElements[3];
    this.numberCardGrid[4] = new numberedCardGridSlot();
    this.numberCardGrid[4].connectedRoyalCardGridSlots = [];
    this.numberCardGrid[4].connectedRoyalCardGridSlots = [];
    this.numberCardGrid[4].element = numberedCardGridSlotElements[4];
    this.numberCardGrid[5] = new numberedCardGridSlot();
    this.numberCardGrid[5].connectedRoyalCardGridSlots = [5];
    this.numberCardGrid[5].adjacentRoyalGridSlots = [6];
    this.numberCardGrid[5].element = numberedCardGridSlotElements[5];
    this.numberCardGrid[6] = new numberedCardGridSlot();
    this.numberCardGrid[6].connectedRoyalCardGridSlots = [0, 8];
    this.numberCardGrid[6].connectedRoyalCardGridSlots = [7, 9];
    this.numberCardGrid[6].element = numberedCardGridSlotElements[6];
    this.numberCardGrid[7] = new numberedCardGridSlot();
    this.numberCardGrid[7].connectedRoyalCardGridSlots = [1];
    this.numberCardGrid[7].adjacentRoyalGridSlots = [10];
    this.numberCardGrid[7].element = numberedCardGridSlotElements[7];
    this.numberCardGrid[8] = new numberedCardGridSlot();
    this.numberCardGrid[8].connectedRoyalCardGridSlots = [2, 7];
    this.numberCardGrid[8].adjacentRoyalGridSlots = [8, 11];
    this.numberCardGrid[8].element = numberedCardGridSlotElements[8];
  },
  generateRoyalCardGrid: function () {
    let cardsSlotRoyalElements = $(".card-slot-royal");
    for (let i = 0; i < cardsSlotRoyalElements.length; i++) {
      let newRoyalCardGridSlot = new royalCardGridSlot();
      newRoyalCardGridSlot.element = cardsSlotRoyalElements[i];
      newRoyalCardGridSlot.topCardElement = newRoyalCardGridSlot.element.getElementsByClassName(
        "card-royal"
      )[0];
      newRoyalCardGridSlot.updateCardVisuals();
      royalCardGrid.unshift(newRoyalCardGridSlot);
    }
  },
  populateNumberedCardGrid: function () {
    for (let i = 0; i < this.numberCardGrid.length; i++) {
      while (this.numberCardGrid[i].cards.length === 0) {
        let cardToPlace = deck.drawCard();
        if (cardToPlace.cardValue === 0) {
          jokerDeck.cards.push(cardToPlace);
        } else if (cardToPlace.cardValue === 1) {
          acesDeck.cards.push(cardToPlace);
        } else if (cardToPlace.cardValue > 10) {
          hand.cards.push(cardToPlace);
          hand.topCardElement
            .getElementsByTagName("svg")[0]
            .getElementsByTagName(
              "text"
            )[0].textContent = `${hand.cards[0].cardValue} of ${hand.cards[0].suit}`;
        } else {
          this.numberCardGrid[i].cards.push(cardToPlace);
          this.numberCardGrid[i].element
            .getElementsByTagName("svg")[0]
            .getElementsByTagName(
              "text"
            )[0].textContent = `${this.numberCardGrid[i].cards[0].cardValue} of ${this.numberCardGrid[i].cards[0].suit}`;
        }
      }
    }
  },

  findValidMoves: function () {
    if (cardInHand) {
      if (cardInHand.cardType === "royal") {
        console.log(cardInHand);
        console.log("Checking For Highest Value Of Matching Suit");

        let highestValueMatchingSlot = new numberedCardGridSlot();
        for (let i = 0; i < this.numberCardGrid.length; i++) {
          console.log(
            `The suit of the slot is ${this.numberCardGrid[i].cards[0].suit}`
          );
          if (this.numberCardGrid[i].cards[0].suit === cardInHand.suit) {
            console.log("The suit is a match");
            if (highestValueMatchingSlot.cards.length > 0) {
              if (
                this.numberCardGrid[i].cards[0].cardValue >
                highestValueMatchingSlot.cards[0].cardValue
              ) {
                highestValueMatchingSlot = this.numberCardGrid[i];
              }
            } else {
              highestValueMatchingSlot = this.numberCardGrid[i];
            }
          }
        }

        if (highestValueMatchingSlot.cards.length === 0) {
          console.log("Checking For Highest Value Colour");

          for (let i = 0; i < this.numberCardGrid.length; i++) {
            if (
              this.numberCardGrid[i].cards[0].cardColour ===
              cardInHand.cardColour
            ) {
              if (highestValueMatchingSlot.cards.length > 0) {
                if (
                  this.numberCardGrid[i].cards[0].cardValue >
                  highestValueMatchingSlot.cards[0].cardValue
                ) {
                  highestValueMatchingSlot = this.numberCardGrid[i];
                }
              } else {
                highestValueMatchingSlot = this.numberCardGrid[i];
              }
            }
          }
        }

        if (highestValueMatchingSlot.cards.length === 0) {
          console.log("Checking For Highest Value of any colour");

          for (let i = 0; i < this.numberCardGrid.length; i++) {
            if (highestValueMatchingSlot.cards.length > 0) {
              if (
                this.numberCardGrid[i].cards[0].cardValue >
                highestValueMatchingSlot.cards[0].cardValue
              ) {
                highestValueMatchingSlot = this.numberCardGrid[i];
              }
            } else {
              highestValueMatchingSlot = this.numberCardGrid[i];
            }
          }
        }

        console.log(highestValueMatchingSlot);
      } else if (cardInHand.cardType === "numbered") {
      }
    }
  },
};

let hand = {
};

let jokerDeck = {
  cards: [],
};
let acesDeck = {
  cards: [],
};

let deck = {
  cards: [],
  shuffle: function () {
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
          card.cardValue = j;
          card.suit = cardSuits[i];
          card.cardType = "ace";
        } else if (j > 1 && j < 11) {
          card = new numberCard();
          card.cardValue = j;
          card.suit = cardSuits[i];
          card.cardType = "numbered";
        } else {
          card = new royalCard();
          card.cardValue = j;
          card.health = j;
          card.suit = cardSuits[i];
          card.cardType = "royal";
        }

        if (cardSuits[i] === "clubs" || cardSuits[i] === "spades") {
          card.cardColour = "black";
        } else {
          card.cardColour = "red";
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

let generalCardProperties = {
  suit: "",
  cardValue: 0,
  canBeMoved: "false",
  cardType: "",
  cardColour: "",
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

$(document).ready(onReady);

function onReady() {
  deck.initialise();
  deck.shuffle();
  gameManager.handSetup();
  gameManager.generateNumberedCardGrid();
  gameManager.populateNumberedCardGrid();
  gameManager.generateRoyalCardGrid();

  interact(".draggable").draggable({
    listeners: {
      start(event) {
        console.log(event.type, event.target);
      },
      move(event) {
        event.target.style.transform.position.x += event.dx;
        event.target.style.transform.position.y += event.dy;
      },
    },
  });

  let clone = null;
  interact(".draggable").draggable({
    listeners: {
      start(event) {
        event.target.style.zIndex = 1;
      },

      move: dragMoveListener,

      end(event) {
        event.target.style.zIndex = 0;
      },
    },
  });

  function dragMoveListener(event) {
    var target = event.target;

    var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

    target.style.webkitTransform = target.style.transform =
      "translate(" + x + "px, " + y + "px)";

    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);
  }

  interact(".dropzone").dropzone({
    accept: ".card",

    overlap: 0.75,

    ondropactivate: function (event) {
      event.target.classList.add("drop-active");
    },
    ondragenter: function (event) {
      var draggableElement = event.relatedTarget;
      var dropzoneElement = event.target;
    },
    ondragleave: function (event) {},
    ondrop: function (event) {
      let dropSlotGridIndex = event.currentTarget.getAttribute(
        "data-grid-index"
      );
      let dropSlotType = event.currentTarget.getAttribute("data-slot-type");

      let dropItemParentSlotIndex = event.relatedTarget.parentNode.getAttribute(
        "data-grid-index"
      );
      let dropItemParentSlotType = event.relatedTarget.parentNode.getAttribute(
        "data-slot-type"
      );

      if (dropSlotType === "royal") {
        if (dropItemParentSlotType === "hand") {
          royalCardGrid[dropSlotGridIndex].cards.unshift(hand.cards.shift());
          console.log(royalCardGrid[dropSlotGridIndex]);
          console.log(hand);
          royalCardGrid[dropSlotGridIndex].updateCardVisuals();
          hand.updateCardVisuals();

        }
      }
    },
    ondropdeactivate: function (event) {
      event.relatedTarget.style.transform =
        "translate(" + 0 + "px, " + 0 + "px)";

      event.relatedTarget.setAttribute("data-x", 0);
      event.relatedTarget.setAttribute("data-y", 0);
    },
  });
}
