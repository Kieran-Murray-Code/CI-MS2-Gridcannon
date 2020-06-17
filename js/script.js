const cardSuits = ["clubs", "spades", "hearts", "diamonds"];
const numberOfJokers = 2;

class gridSlot {
  constructor() {
    (this.cards = []), this.element, this.topCardElement, this.overlayElement;
  }
  addCardToSlot(cardToAdd) {
    this.cards.unshift(cardToAdd);
    this.updateCardVisuals();
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

class royalCardGridSlot extends gridSlot {
  applyDamage(damage){
    console.log(damage);
    if(damage >= (this.cards[0].cardValue + this.cards[0].armour))
    {
      this.element.classList.add("hide-element");
    }
    else
    {
      console.log("Not enough damage to kill the Royal");
    }
  }
}
class numberedCardGridSlot extends gridSlot {
  constructor() {
    super();
    (this.oppositeRoyalCardGridSlots = []),
      (this.adjacentRoyalGridSlots = []),
      (this.verticalAttackSlots = []),
      (this.horizontalAttackSlots = []);
  }
  addCardToSlot(cardToAdd) {
    this.cards.unshift(cardToAdd);
    this.updateCardVisuals();
    this.attackRoyals();
  }
  attackRoyals() {
    let verticalRoyalGridSlot;
    let verticalRoyalCard;
    let horizontalRoyalGridSlot;
    let horizontalRoyalCard;
    let verticalAttackCards = [];
    let horizontalAttackCards = [];
    let verticalRoyalHealth = 0;
    let verticalRoyalIndex;
    let verticalDamage = 0;
    let horizontalRoyalHealth = 0;
    let horizontalRoyalIndex;
    let horizontalDamage = 0;

    if (this.oppositeRoyalCardGridSlots[0]) {
      horizontalRoyalIndex = this.oppositeRoyalCardGridSlots[0];
      if (royalCardGrid[horizontalRoyalIndex]) {
        horizontalRoyalGridSlot = royalCardGrid[horizontalRoyalIndex];
        if (royalCardGrid[horizontalRoyalIndex].cards.length > 0) {
          horizontalRoyalCard = royalCardGrid[horizontalRoyalIndex].cards[0];
          horizontalRoyalHealth =
            royalCardGrid[horizontalRoyalIndex].cards[0].cardValue +
            royalCardGrid[horizontalRoyalIndex].cards[0].armour;
        }
      }
    }
    if (this.oppositeRoyalCardGridSlots[1]) {
      verticalRoyalIndex = this.oppositeRoyalCardGridSlots[1];
      if (royalCardGrid[verticalRoyalIndex]) {
        verticalRoyalGridSlot = royalCardGrid[verticalRoyalIndex];
        if (royalCardGrid[verticalRoyalIndex].cards.length > 0) {
          verticalRoyalCard = royalCardGrid[verticalRoyalIndex].cards[0];
          verticalRoyalHealth =
            royalCardGrid[verticalRoyalIndex].cards[0].cardValue +
            royalCardGrid[verticalRoyalIndex].cards[0].armour;
        }
      }
    }

    if (this.verticalAttackSlots.length !== 0) {
      verticalAttackCards.unshift(
        gameManager.numberCardGrid[this.verticalAttackSlots[0]].cards[0]
      );
      verticalAttackCards.unshift(
        gameManager.numberCardGrid[this.verticalAttackSlots[1]].cards[0]
      );
      verticalDamage =
        gameManager.numberCardGrid[this.verticalAttackSlots[0]].cards[0]
          .cardValue +
        gameManager.numberCardGrid[this.verticalAttackSlots[1]].cards[0]
          .cardValue;
          console.log(verticalDamage);
    }

    if (this.horizontalAttackSlots.length != 0) {
      horizontalAttackCards.unshift(
        gameManager.numberCardGrid[this.horizontalAttackSlots[0]].cards[0]
      );
      horizontalAttackCards.unshift(
        gameManager.numberCardGrid[this.horizontalAttackSlots[1]].cards[0]
      );
      horizontalDamage =
        gameManager.numberCardGrid[this.horizontalAttackSlots[0]].cards[0]
          .cardValue +
        gameManager.numberCardGrid[this.horizontalAttackSlots[1]].cards[0]
          .cardValue;
          console.log(horizontalDamage);
    }

    //Check if Royal is a Jack, King Queen or empty
    //If it's a Jack then then the attack power must be greater or equal to the value + armour
    //If it's a Queen then the two attack cards must equal the Queens colour
    //If it's a Kind then the two attack cards must equal the Kings suit.
    if (verticalRoyalCard) {
      if (verticalAttackCards.length == 2) {
        if (verticalRoyalCard.royalType === "jack") {
          console.log("Apply Damage To Jack");
          verticalRoyalGridSlot.applyDamage(verticalDamage);
        } else if (verticalRoyalCard.royalType === "queen") {
          if (
            verticalRoyalCard.cardColour ===
              verticalAttackCards[0].cardColour &&
            verticalRoyalCard.cardColour === verticalAttackCards[1].cardColour
          ) {
            console.log("Apply Damage To Queen");
            verticalRoyalGridSlot.applyDamage(verticalDamage);
          }
          else{
            console.log("Attack cards don't match the Queen's colour");
          }
        } else {
          if(verticalRoyalCard.suit === verticalAttackCards[0].suit && verticalRoyalCard.suit === verticalAttackCards[1].suit)
          {
            console.log("Apply Damage To King");
            verticalRoyalGridSlot.applyDamage(verticalDamage);
          }
          else{
            console.log("Attack cards don't match the King's suit");
          }
        }
      }
      else{
        console.log("Vertical attack doesn't have 2 attack cards");
      }
    } else {
      console.log("no royal on the vertical axis");
    }

    if (horizontalRoyalCard) {
      if (horizontalAttackCards.length == 2) {
        if (horizontalRoyalCard.royalType === "jack") {
          console.log("Apply Damage To Jack");
          horizontalRoyalGridSlot.applyDamage(horizontalDamage);
        } else if (horizontalRoyalCard.royalType === "queen") {
          if (
            horizontalRoyalCard.cardColour ===
              horizontalAttackCards[0].cardColour &&
            horizontalRoyalCard.cardColour === horizontalAttackCards[1].cardColour
          ) {
            console.log("Apply Damage To Queen");
            horizontalRoyalGridSlot.applyDamage(horizontalDamage);
          }
          else{
            console.log("Attack cards don't match the Queen's colour");
          }
        } else {
          if(horizontalRoyalCard.suit === horizontalAttackCards[0].suit && horizontalRoyalCard.suit === horizontalAttackCards[1].suit)
          {
            console.log("Apply Damage To King");
            horizontalRoyalGridSlot.applyDamage(horizontalDamage);
          }
          else{
            console.log("Attack cards don't match the King's suit");
          }
        }
      }
      else{
        console.log("Horizonal attack doesn't have 2 attack cards");
      }
    } else {
      console.log("no royal on the horizontal axis");
    }
    
    
    if (horizontalDamage != 0 && horizontalRoyalHealth != 0) {
      if (horizontalDamage >= horizontalRoyalHealth) {
      }
    }

    if (verticalDamage != 0 && verticalRoyalHealth != 0) {
      if (verticalDamage >= verticalRoyalHealth) {
      }
    }
  }
}

let royalCardGrid = [];

let cardInHand;
let cardInHandSlotType;

const gameManager = {
  state: "setup",

  numberCardGrid: [],
  handSetup: function () {
    hand = new gridSlot();
    hand.element = Array.from($("#hand"))[0];
    hand.topCardElement = hand.element.getElementsByClassName("card")[0];
    //hand.updateCardVisuals();
  },
  acesDeckSetup: function () {
    acesDeck.element = Array.from($("#aces"))[0];
    acesDeck.topCardElement = acesDeck.element.getElementsByClassName(
      "card"
    )[0];
    acesDeck.updateCardVisuals();
  },
  jokerDeckSetup: function () {
    jokerDeck.element = Array.from($("#jokers"))[0];
    jokerDeck.topCardElement = jokerDeck.element.getElementsByClassName(
      "card"
    )[0];
    jokerDeck.updateCardVisuals();
  },
  discardDeckSetup: function () {
    discardDeck.element = Array.from($("#discard"))[0];
    discardDeck.topCardElement = discardDeck.element.getElementsByClassName(
      "card"
    )[0];
    discardDeck.updateCardVisuals();
  },
  generateNumberedCardGrid: function () {
    let numberedCardGridSlotElements = $(".card-slot-numbered");

    for (let i = 0; i < numberedCardGridSlotElements.length; i++) {
      this.numberCardGrid[i] = new numberedCardGridSlot();
      this.numberCardGrid[i].element = numberedCardGridSlotElements[i];
      this.numberCardGrid[i].topCardElement = this.numberCardGrid[
        i
      ].element.getElementsByClassName("card")[0];
    }

    this.numberCardGrid[0].oppositeRoyalCardGridSlots = [2, 7];
    this.numberCardGrid[0].adjacentRoyalGridSlots = [11, 8];
    this.numberCardGrid[0].verticalAttackSlots = [3, 6];
    this.numberCardGrid[0].horizontalAttackSlots = [1, 2];

    this.numberCardGrid[1].oppositeRoyalCardGridSlots = [null,1];
    this.numberCardGrid[1].adjacentRoyalGridSlots = [10];
    this.numberCardGrid[1].verticalAttackSlots = [4, 7];

    this.numberCardGrid[2].oppositeRoyalCardGridSlots = [0, 8];
    this.numberCardGrid[2].adjacentRoyalGridSlots = [7, 9];
    this.numberCardGrid[2].verticalAttackSlots = [5, 8];
    this.numberCardGrid[2].horizontalAttackSlots = [0, 1];

    this.numberCardGrid[3].oppositeRoyalCardGridSlots = [5,null];
    this.numberCardGrid[3].adjacentRoyalGridSlots = [6];
    this.numberCardGrid[3].horizontalAttackSlots = [4, 5];

    this.numberCardGrid[5].oppositeRoyalCardGridSlots = [6, null];
    this.numberCardGrid[5].adjacentRoyalGridSlots = [5];
    this.numberCardGrid[5].horizontalAttackSlots = [3, 4];

    this.numberCardGrid[6].oppositeRoyalCardGridSlots = [3, 11];
    this.numberCardGrid[6].adjacentRoyalGridSlots = [2, 4];
    this.numberCardGrid[6].verticalAttackSlots = [0, 3];
    this.numberCardGrid[6].horizontalAttackSlots = [7, 8];

    this.numberCardGrid[7].oppositeRoyalCardGridSlots = [null,10];
    this.numberCardGrid[7].adjacentRoyalGridSlots = [1];
    this.numberCardGrid[7].verticalAttackSlots = [1, 4];

    this.numberCardGrid[8].oppositeRoyalCardGridSlots = [4, 9];
    this.numberCardGrid[8].adjacentRoyalGridSlots = [0, 3];
    this.numberCardGrid[8].verticalAttackSlots = [2, 5];
    this.numberCardGrid[8].horizontalAttackSlots = [6, 7];
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
          jokerDeck.cards.unshift(cardToPlace);
          jokerDeck.updateCardVisuals();
        } else if (cardToPlace.cardValue === 1) {
          acesDeck.cards.unshift(cardToPlace);
          acesDeck.updateCardVisuals();
        } else if (cardToPlace.cardValue > 10) {
          hand.cards.unshift(cardToPlace);
          hand.updateCardVisuals();
        } else {
          this.numberCardGrid[i].cards.unshift(cardToPlace);
          this.numberCardGrid[i].updateCardVisuals();
        }
      }
    }
  },

  findValidMoves: function () {
    if (cardInHand) {
      if (cardInHand.cardType === "royal") {
        let highestValueMatchingSlot = new numberedCardGridSlot();
        for (let i = 0; i < this.numberCardGrid.length; i++) {
          if (i === 4) {
            continue;
          }

          let royalSlotAvailable = false;

          for (
            let j = 0;
            j < this.numberCardGrid[i].adjacentRoyalGridSlots.length;
            j++
          ) {
            if (
              royalCardGrid[this.numberCardGrid[i].adjacentRoyalGridSlots[j]]
                .cards.length === 0
            ) {
              royalSlotAvailable = true;
            }
          }

          if (royalSlotAvailable === false) {
            continue;
          }

          if (this.numberCardGrid[i].cards[0].suit === cardInHand.suit) {
            if (highestValueMatchingSlot.cards.length > 0) {
              if (
                this.numberCardGrid[i].cards[0].cardValue >
                highestValueMatchingSlot.cards[0].cardValue
              ) {
                highestValueMatchingSlot = this.numberCardGrid[i];
              }
            } else {
              highestValueMatchingSlot = this.numberCardGrid[i];
              //check if adjacent royal slots are filled if the are continue
            }
          } else {
            continue;
          }
        }
        if (highestValueMatchingSlot.cards.length === 0) {
          for (let i = 0; i < this.numberCardGrid.length; i++) {
            if (i === 4) {
              continue;
            }

            let royalSlotAvailable = false;

            for (
              let j = 0;
              j < this.numberCardGrid[i].adjacentRoyalGridSlots.length;
              j++
            ) {
              if (
                royalCardGrid[this.numberCardGrid[i].adjacentRoyalGridSlots[j]]
                  .cards.length === 0
              ) {
                royalSlotAvailable = true;
              }
            }

            if (royalSlotAvailable === false) {
              continue;
            }

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
            } else {
              continue;
            }
          }
        }
        if (highestValueMatchingSlot.cards.length === 0) {
          for (let i = 0; i < this.numberCardGrid.length; i++) {
            if (i === 4) {
              continue;
            }

            let royalSlotAvailable = false;

            for (
              let j = 0;
              j < this.numberCardGrid[i].adjacentRoyalGridSlots.length;
              j++
            ) {
              if (
                royalCardGrid[this.numberCardGrid[i].adjacentRoyalGridSlots[j]]
                  .cards.length === 0
              ) {
                royalSlotAvailable = true;
              }
            }

            if (royalSlotAvailable === false) {
              continue;
            }
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

        for (
          let i = 0;
          i < highestValueMatchingSlot.adjacentRoyalGridSlots.length;
          i++
        ) {
          royalCardGrid[
            highestValueMatchingSlot.adjacentRoyalGridSlots[i]
          ].element.classList.add("dropzone");
        }
      } else if (cardInHand.cardType === "numbered") {
        let matchFound = false;
        for (let i = 0; i < gameManager.numberCardGrid.length; i++) {
          if (gameManager.numberCardGrid[i].cards.length > 0) {
            if (
              gameManager.numberCardGrid[i].cards[0].cardValue <=
              cardInHand.cardValue
            ) {
              gameManager.numberCardGrid[i].element.classList.add("dropzone");
              matchFound = true;
            }
          }
        }

        if (matchFound === false) {
          //Find the lowest royal of matching suit
          let lowestMatchingRoyalSlot;
          for (let i = 0; i < royalCardGrid.length; i++) {
            if (royalCardGrid[i].cards != 0) {
              if (royalCardGrid[i].cards[0].suit === cardInHand.suit) {
                if (lowestMatchingRoyalSlot) {
                  if (
                    royalCardGrid[i].cards[0].cardValue <
                    lowestMatchingRoyalSlot.cards[0].cardValue
                  ) {
                    lowestMatchingRoyalSlot = royalCardGrid[i];
                  }
                } else {
                  lowestMatchingRoyalSlot = royalCardGrid[i];
                }
              }
            }
          }
          //Find the lowest royal of matching colour
          if (!lowestMatchingRoyalSlot) {
            for (let i = 0; i < royalCardGrid.length; i++) {
              if (royalCardGrid[i].cards != 0) {
                if (
                  royalCardGrid[i].cards[0].cardColour === cardInHand.cardColour
                ) {
                  if (lowestMatchingRoyalSlot) {
                    if (
                      royalCardGrid[i].cards[0].cardValue <
                      lowestMatchingRoyalSlot.cards[0].cardValue
                    ) {
                      lowestMatchingRoyalSlot = royalCardGrid[i];
                    }
                  } else {
                    lowestMatchingRoyalSlot = royalCardGrid[i];
                  }
                }
              }
            }
          }
          //Find the lowest value royal.
          if (!lowestMatchingRoyalSlot) {
            for (let i = 0; i < royalCardGrid.length; i++) {
              if (royalCardGrid[i].cards != 0) {
                if (lowestMatchingRoyalSlot) {
                  if (
                    royalCardGrid[i].cards[0].cardValue <
                    lowestMatchingRoyalSlot.cards[0].cardValue
                  ) {
                    lowestMatchingRoyalSlot = royalCardGrid[i];
                  }
                } else {
                  lowestMatchingRoyalSlot = royalCardGrid[i];
                }
              }
            }
          }

          lowestMatchingRoyalSlot.element.classList.add("dropzone");
        }
      } else if (cardInHand.cardType === "ace") {
        if (cardInHandSlotType === "hand") {
          acesDeck.element.classList.add("dropzone");
        }
      } else if (cardInHand.cardType === "joker") {
        if (cardInHandSlotType === "hand") {
          jokerDeck.element.classList.add("dropzone");
        }
      }
    }
  },
};

let hand = {};

let jokerDeck = new gridSlot();
let acesDeck = new gridSlot();
let discardDeck = new gridSlot();

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
          if (j === 11) {
            card.royalType = "jack";
          } else if (j === 12) {
            card.royalType = "queen";
          } else {
            card.royalType = "king";
          }
        }

        if (cardSuits[i] === "clubs" || cardSuits[i] === "spades") {
          card.cardColour = "black";
        } else {
          card.cardColour = "red";
        }
        this.cards.unshift(card);
      }
    }

    for (let i = 0; i < numberOfJokers; i++) {
      card = new jokerCard();
      card.suit = "joker";
      card.cardType = "joker";
      this.cards.unshift(card);
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
  royalType: "",
  armour: 0,
  health: 0,
};

function moveCard() {
  return {};
}

function placeCard() {
  return {};
}

function selectCard() {
  return {};
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
  gameManager.acesDeckSetup();
  gameManager.jokerDeckSetup();
  gameManager.discardDeckSetup();
  gameManager.generateNumberedCardGrid();
  gameManager.populateNumberedCardGrid();
  gameManager.generateRoyalCardGrid();

  // addAllRoyalsToHand();

  interact(".draggable").draggable({
    listeners: {
      start(event) {
        event.target.style.transform = "translate(" + -50 + "%, " + -50 + "%)";
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
        if (event.target.parentNode.getAttribute("data-slot-type") === "hand") {
          cardInHand = hand.cards[0];
          cardInHandSlotType = "hand";
        }
        gameManager.findValidMoves();
        /*Find Valid Moves
        if cardTye ==== "royal"
        {
          find highest matching suit
          else find hightest matching colour
          else find highest matching value
        } 
        if cardTye ==== "number"
        {
          find all equal to or below card value
          if no matches are found, find smallest Royal and add to armour.
        } 
        if cardTye ==== "ace"
        {
          find all number slots
        } 
        if cardTye ==== "joker"
        {
          find the gameBoard
        } 
        
        */
      },

      move: dragMoveListener,

      end(event) {
        event.target.style.zIndex = 0;
      },
    },
  });

  function dragMoveListener(event) {
    var target = event.target;

    let boundingRect = target.getBoundingClientRect();

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
          if (royalCardGrid[dropSlotGridIndex].cards.length === 0) {
            royalCardGrid[dropSlotGridIndex].addCardToSlot(hand.cards.shift());
          } else {
            //Add Armour
            royalCardGrid[
              dropSlotGridIndex
            ].cards[0].armour += hand.cards.shift().cardValue;
          }

          royalCardGrid[dropSlotGridIndex].updateCardVisuals();
          hand.updateCardVisuals();
        }
      } else if (dropSlotType === "numbered") {
        if (dropItemParentSlotType === "hand") {
          //Add card to slot
          gameManager.numberCardGrid[dropSlotGridIndex].addCardToSlot(
            hand.cards.shift()
          );
        }
      } else if (dropSlotType === "aces") {
        if (dropItemParentSlotType === "hand") {
          acesDeck.cards.unshift(hand.cards.shift());
          acesDeck.updateCardVisuals();
          hand.updateCardVisuals();
        }
      } else if (dropSlotType === "jokers") {
        if (dropItemParentSlotType === "hand") {
          jokerDeck.cards.unshift(hand.cards.shift());
          jokerDeck.updateCardVisuals();
          hand.updateCardVisuals();
        }
      }

      if (hand.cards.length === 0) {
        let newCard = deck.drawCard();
        hand.cards.unshift(newCard);
        hand.updateCardVisuals();
      }
    },
    ondropdeactivate: function (event) {
      event.relatedTarget.style.transform =
        "translate(" + -50 + "%, " + -50 + "%)";

      event.relatedTarget.setAttribute("data-x", 0);
      event.relatedTarget.setAttribute("data-y", 0);
      event.target.classList.remove("dropzone");
      event.target.classList.remove("drop-active");
    },
  });
}

function addAllRoyalsToHand() {
  for (let i = 0; i < deck.cards.length; i++) {
    if (deck.cards[i].cardType === "royal") {
      hand.cards.unshift(deck.cards[i]);
    }
  }
}
