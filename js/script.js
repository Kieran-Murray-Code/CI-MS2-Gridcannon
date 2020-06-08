const cardSuits = ["clubs", "spades", "hearts", "diamonds"];
const numberOfJokers = 2;

function numberedCardGridSlot() {
  this.cards = [];
  this.oppositeRoyalCardGridSlots = [];
  this.adjacentRoyalGridSlots = [];
  this.element = [];
}

function royalCardGridSlot() {
  this.cards = [];
  this.element = [];
  this.topCardElement = [];
  this.overlayElement = [];
}

let royalCardGrid = [];

let cardInHand;

// Game Manager
const gameManager = {
  state: "setup",
  // Generate a blank grid for number cards and link to them the royal card slots that they are able to attack.
  numberCardGrid: [],
  handSetup: function () {
    hand.slotElement = $("#hand");
    hand.topCardElement = hand.slotElement[0].getElementsByClassName("card");
  },
  generateNumberedCardGrid: function () {
    let numberedCardGridSlotElements = $(".card-slot-numbered");
    this.numberCardGrid[0] = new numberedCardGridSlot();
    this.numberCardGrid[0].connectedRoyalCardGridSlots = [4, 9];
    this.numberCardGrid[0].adjacentRoyalGridSlots = [0, 3];
    this.numberCardGrid[0].element = numberedCardGridSlotElements[0];
    // this.numberCardGrid[0].element.getElementsByTagName("svg")[0].getElementsByTagName("text")[0].textContent = "1";
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
  generateRoyalCardGrid: function (){
    let cardsSlotRoyalElements = $(".card-slot-royal");
    console.log(cardsSlotRoyalElements);
    for(let i = 0; i < cardsSlotRoyalElements.length; i ++)
    {
      let newRoyalCardGridSlot = new royalCardGridSlot();
      newRoyalCardGridSlot.element = cardsSlotRoyalElements[i];
      newRoyalCardGridSlot.topCardElement = newRoyalCardGridSlot.element.getElementsByClassName("card-royal")[0];
      royalCardGrid.unshift(newRoyalCardGridSlot);
    }
    console.log(royalCardGrid);
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
          hand.topCardElement[0]
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
        // find highest value card of same suit
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
          // Check for hightest value card of the same colour
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
          // Check for hightest value card of any colour
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
  cards: [],
  slotElement: [],
  topCardElement: [],
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

// Card Variables
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
        // if (!clone) {
        //   clone = event.target.cloneNode(true);
        //   clone.classList.add("clone");
        //   event.target.parentNode.append(clone);
        // }
      },

      move: dragMoveListener,
      // call this function on every dragend event
      end(event) {
        event.target.style.zIndex = 0;
      },
    },
  });

  function dragMoveListener(event) {
    var target = event.target;
    //clone.style.zIndex = 1;
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
    var y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;
    // translate the element
    target.style.webkitTransform = target.style.transform =
      "translate(" + x + "px, " + y + "px)";
    // update the posiion attributes
    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);
  }

  interact(".dropzone").dropzone({
    // only accept elements matching this CSS selector
    accept: ".card",
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,

    // listen for drop related events:

    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.classList.add("drop-active");
    },
    ondragenter: function (event) {
      var draggableElement = event.relatedTarget;
      var dropzoneElement = event.target;
      console.log("Drag Enter");

      // feedback the possibility of a drop
    },
    ondragleave: function (event) {
      // remove the drop feedback style
      console.log("Drag Leave");
    },
    ondrop: function (event) {
      let dropSlotGridIndex = event.currentTarget.getAttribute(
        "data-grid-index"
      );
      royalCardGrid[dropSlotGridIndex].cards.unshift(hand.cards[0]);
      console.log(`${royalCardGrid[dropSlotGridIndex].cards[0].cardValue} of ${royalCardGrid[dropSlotGridIndex].cards[0].suit}`);
      royalCardGrid[dropSlotGridIndex].topCardElement.getElementsByTagName("svg")[0]
      .getElementsByTagName(
        "text"
      )[0].textContent = `${royalCardGrid[dropSlotGridIndex].cards[0].cardValue} of ${royalCardGrid[dropSlotGridIndex].cards[0].suit}`;
    },
    ondropdeactivate: function (event) {
      // remove active dropzone feedback
      console.log("Drop Deactive");
      event.relatedTarget.style.transform =
        "translate(" + 0 + "px, " + 0 + "px)";
      // update the posiion attributes
      event.relatedTarget.setAttribute("data-x", 0);
      event.relatedTarget.setAttribute("data-y", 0);
      // clone.remove();
      // clone = null;
      // event.relatedTarget =  null;
    },
  });
}

// cardInHand = hand.cards[0];
// gameManager.findValidMoves();

// console.log("Deck");
// console.log(deck.cards);
// console.log("Number Grid");
// console.log(gameManager.numberCardGrid);
// console.log("Royal Grid");
// console.log(royalCardGrid);
// console.log("Hand");
// console.log(hand.cards);
// console.log("Aces");
// console.log(acesDeck.cards);
// console.log("Jokers");
// console.log(jokerDeck.cards);

// $(document).on("keypress", function (e) {
//   if (String.fromCharCode(e.which) === "d") {
//     deck.drawCard();
//   }
// });
