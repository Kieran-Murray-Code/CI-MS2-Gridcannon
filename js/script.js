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
      let cardValueText = this.topCardElement.getElementsByClassName(
        "card-value"
      )[0];

      if (this.cards[0].cardValue === 0) {
        cardValueText.textContent = "JO";
      }
      else if (this.cards[0].cardValue === 1) {
        cardValueText.textContent = "A";
      } else if (this.cards[0].cardValue === 11) {
        cardValueText.textContent = "J";
      } else if (this.cards[0].cardValue === 12) {
        cardValueText.textContent = "Q";
      } else if (this.cards[0].cardValue === 13) {
        cardValueText.textContent = "K";
      } else {
        cardValueText.textContent = this.cards[0].cardValue;
      }

      let suitIcon = this.topCardElement.getElementsByClassName("suit-icon")[0];
      let slotLabel = this.topCardElement.getElementsByClassName(
        "slot-label"
      )[0];
      //suitIcon.setAttribute("class", "")
      //suitIcon.classList.add("suit-icon");

      suitIcon.classList.remove("club");
      suitIcon.classList.remove("spade");
      suitIcon.classList.remove("heart");
      suitIcon.classList.remove("diamond");
      suitIcon.classList.remove("red");
      suitIcon.classList.remove("black");

      slotLabel.classList.remove("red");
      slotLabel.classList.remove("black");

      this.topCardElement.classList.remove("black");
      this.topCardElement.classList.remove("red");

      if (this.cards[0].suit === "clubs") {
        suitIcon.classList.add("club");
        this.topCardElement.classList.add("red");
        slotLabel.classList.add("red");
      } else if (this.cards[0].suit === "spades") {
        suitIcon.classList.add("spade");
        this.topCardElement.classList.add("red");
        this.topCardElement;
        slotLabel.classList.add("red");
      } else if (this.cards[0].suit === "hearts") {
        suitIcon.classList.add("heart");
        this.topCardElement.classList.add("black");
        this.topCardElement;
        slotLabel.classList.add("black");
      } else if (this.cards[0].suit === "diamonds") {
        suitIcon.classList.add("diamond");
        this.topCardElement.classList.add("black");
        this.topCardElement;
        slotLabel.classList.add("black");
      } else if (this.cards[0].suit === "joker") {
        suitIcon.classList.add("joker");
        this.topCardElement.classList.add("black");
        this.topCardElement;
        slotLabel.classList.add("black");
      }

      if (this.cards[0].cardValue > 10) {
        let armorLabel = this.topCardElement.getElementsByClassName(
          "armor-label"
        );
        if (armorLabel[0]) {
          armorLabel[0].getElementsByTagName(
            "text"
          )[0].textContent = `${this.cards[0].armour}`;
        }
      }
    } else {
      this.topCardElement.classList.add("hide-element");
    }
  }
  shuffleCardsIntoDeck() {
    while (this.cards.length > 0) {
      deck.cards.push(this.cards.shift());
    }
    deck.shuffle();
    this.updateCardVisuals();
  }
}
class royalCardGridSlot extends gridSlot {
  applyDamage(damage) {
    if (damage >= this.cards[0].cardValue + this.cards[0].armour) {
      this.element.classList.add("deactivate");
      this.cards[0].isDefeated = true;
    } else {
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
    let verticalRoyalIndex;
    let verticalDamage = 0;
    let horizontalRoyalIndex;
    let horizontalDamage = 0;

    if (this.oppositeRoyalCardGridSlots[0] != null) {
      horizontalRoyalIndex = this.oppositeRoyalCardGridSlots[0];
      if (royalCardGrid[horizontalRoyalIndex]) {
        horizontalRoyalGridSlot = royalCardGrid[horizontalRoyalIndex];
        if (royalCardGrid[horizontalRoyalIndex].cards.length > 0) {
          horizontalRoyalCard = royalCardGrid[horizontalRoyalIndex].cards[0];
        }
      }
    }
    if (this.oppositeRoyalCardGridSlots[1] != null) {
      verticalRoyalIndex = this.oppositeRoyalCardGridSlots[1];
      if (royalCardGrid[verticalRoyalIndex]) {
        verticalRoyalGridSlot = royalCardGrid[verticalRoyalIndex];
        if (royalCardGrid[verticalRoyalIndex].cards.length > 0) {
          verticalRoyalCard = royalCardGrid[verticalRoyalIndex].cards[0];
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
      let verticalDamage_01 = 0;
      let verticalDamage_02 = 0;

      if (
        gameManager.numberCardGrid[this.verticalAttackSlots[0]].cards.length > 0
      ) {
        verticalDamage_01 =
          gameManager.numberCardGrid[this.verticalAttackSlots[0]].cards[0]
            .cardValue;
      }
      if (
        gameManager.numberCardGrid[this.verticalAttackSlots[1]].cards.length > 0
      ) {
        verticalDamage_02 =
          gameManager.numberCardGrid[this.verticalAttackSlots[1]].cards[0]
            .cardValue;
      }

      verticalDamage = verticalDamage_01 + verticalDamage_02;
    }

    if (this.horizontalAttackSlots.length != 0) {
      horizontalAttackCards.unshift(
        gameManager.numberCardGrid[this.horizontalAttackSlots[0]].cards[0]
      );
      horizontalAttackCards.unshift(
        gameManager.numberCardGrid[this.horizontalAttackSlots[1]].cards[0]
      );
      let horizontalDamage_01 = 0;
      let horizontalDamage_02 = 0;

      if (
        gameManager.numberCardGrid[this.horizontalAttackSlots[0]].cards.length >
        0
      ) {
        horizontalDamage_01 =
          gameManager.numberCardGrid[this.horizontalAttackSlots[0]].cards[0]
            .cardValue;
      }
      if (
        gameManager.numberCardGrid[this.horizontalAttackSlots[1]].cards.length >
        0
      ) {
        horizontalDamage_02 =
          gameManager.numberCardGrid[this.horizontalAttackSlots[1]].cards[0]
            .cardValue;
      }
      horizontalDamage = horizontalDamage_01 + horizontalDamage_02;
    }

    //Check if Royal is a Jack, King Queen or empty
    //If it's a Jack then then the attack power must be greater or equal to the value + armour
    //If it's a Queen then the two attack cards must equal the Queens colour
    //If it's a Kind then the two attack cards must equal the Kings suit.
    if (verticalRoyalCard) {
      if (verticalAttackCards[0] && verticalAttackCards[1]) {
        if (verticalRoyalCard.royalType === "jack") {
          verticalRoyalGridSlot.applyDamage(verticalDamage);
        } else if (verticalRoyalCard.royalType === "queen") {
          if (
            verticalRoyalCard.cardColour ===
              verticalAttackCards[0].cardColour &&
            verticalRoyalCard.cardColour === verticalAttackCards[1].cardColour
          ) {
            verticalRoyalGridSlot.applyDamage(verticalDamage);
          } else {
          }
        } else {
          if (
            verticalRoyalCard.suit === verticalAttackCards[0].suit &&
            verticalRoyalCard.suit === verticalAttackCards[1].suit
          ) {
            verticalRoyalGridSlot.applyDamage(verticalDamage);
          } else {
          }
        }
      } else {
      }
    } else {
    }

    if (horizontalRoyalCard) {
      if (horizontalAttackCards[0] && horizontalAttackCards[1]) {
        if (horizontalRoyalCard.royalType === "jack") {
          horizontalRoyalGridSlot.applyDamage(horizontalDamage);
        } else if (horizontalRoyalCard.royalType === "queen") {
          if (horizontalAttackCards[0] && horizontalAttackCards[1]) {
            if (
              horizontalRoyalCard.cardColour ===
                horizontalAttackCards[0].cardColour &&
              horizontalRoyalCard.cardColour ===
                horizontalAttackCards[1].cardColour
            ) {
              horizontalRoyalGridSlot.applyDamage(horizontalDamage);
            }
          }
        } else {
          if (
            horizontalRoyalCard.suit === horizontalAttackCards[0].suit &&
            horizontalRoyalCard.suit === horizontalAttackCards[1].suit
          ) {
            horizontalRoyalGridSlot.applyDamage(horizontalDamage);
          }
        }
      } else {
      }
    } else {
    }
  }
}
class deckGridSlot extends gridSlot{
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let firstCard = this.cards[i];
      let secondCard = this.cards[randomIndex];
      this.cards[i] = secondCard;
      this.cards[randomIndex] = firstCard;
    }
  }

  drawCard () {
    if(gameManager.state === "placing-royals")
    {
      gameManager.state === "setup-complete";
      acesDeck.topCardElement.classList.add("draggable");
      jokerDeck.topCardElement.classList.add("draggable");
    }
    if (this.cards.length > 0) {
      return this.cards.pop();
    } else {
    }
  }

  initialise () {
    let cardInstance;
    for (let i = 0; i < cardSuits.length; i++) {
      for (let j = 1; j < 14; j++) {
        if (j === 1) {
          cardInstance = new card();
          cardInstance.cardValue = j;
          cardInstance.suit = cardSuits[i];
          cardInstance.cardType = "ace";
        } else if (j > 1 && j < 11) {
          cardInstance = new card();
          cardInstance.cardValue = j;
          cardInstance.suit = cardSuits[i];
          cardInstance.cardType = "numbered";
        } else {
          cardInstance = new royalCard();
          cardInstance.cardValue = j;
          cardInstance.suit = cardSuits[i];
          cardInstance.cardType = "royal";
          if (j === 11) {
            cardInstance.royalType = "jack";
          } else if (j === 12) {
            cardInstance.royalType = "queen";
          } else {
            cardInstance.royalType = "king";
          }
        }

        if (cardSuits[i] === "clubs" || cardSuits[i] === "spades") {
          cardInstance.cardColour = "black";
        } else {
          cardInstance.cardColour = "red";
        }
        this.cards.unshift(cardInstance);
      }
    }

    for (let i = 0; i < numberOfJokers; i++) {
      cardInstance = new card();
      cardInstance.suit = "joker";
      cardInstance.cardType = "joker";
      cardInstance.cardValue = 0;
      this.cards.unshift(cardInstance);
    }
  }
}
class card {
  constructor(){
    this.suit = "",
    this.cardValue = 0,
    this.cardType = "",
    this.cardColour = "";
  }
}
class royalCard extends card{
  constructor(){
    super();
    this.royalType = "",
    this.armour = 0,
    this.isDefeated = false;
  }
}


const cardSuits = ["clubs", "spades", "hearts", "diamonds"];
const numberOfJokers = 2;
let canTakeMulligan = true;
let royalCardGrid = [];
let cardInHand;
let cardInHandSlotType;
let jokerDeck = new gridSlot();
let acesDeck = new gridSlot();
let discardDeck = new gridSlot();
let deck = new deckGridSlot();
let hand = {};






const gameManager = {
  state: "start",

  numberCardGrid: [],
  deckSetup: function (){
    deck.initialise();
    deck.shuffle();
    deck.element = Array.from($("#deck"))[0];
    deck.topCardElement = deck.element.getElementsByClassName(
      "card"
    )[0];
    // deck.updateCardVisuals();
  },
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

    this.numberCardGrid[0].oppositeRoyalCardGridSlots = [7, 2];
    this.numberCardGrid[0].adjacentRoyalGridSlots = [11, 8];
    this.numberCardGrid[0].verticalAttackSlots = [3, 6];
    this.numberCardGrid[0].horizontalAttackSlots = [1, 2];

    this.numberCardGrid[1].oppositeRoyalCardGridSlots = [null, 1];
    this.numberCardGrid[1].adjacentRoyalGridSlots = [10];
    this.numberCardGrid[1].verticalAttackSlots = [4, 7];

    this.numberCardGrid[2].oppositeRoyalCardGridSlots = [8, 0];
    this.numberCardGrid[2].adjacentRoyalGridSlots = [7, 9];
    this.numberCardGrid[2].verticalAttackSlots = [5, 8];
    this.numberCardGrid[2].horizontalAttackSlots = [0, 1];

    this.numberCardGrid[3].oppositeRoyalCardGridSlots = [5, null];
    this.numberCardGrid[3].adjacentRoyalGridSlots = [6];
    this.numberCardGrid[3].horizontalAttackSlots = [4, 5];

    this.numberCardGrid[5].oppositeRoyalCardGridSlots = [6, null];
    this.numberCardGrid[5].adjacentRoyalGridSlots = [5];
    this.numberCardGrid[5].horizontalAttackSlots = [3, 4];

    this.numberCardGrid[6].oppositeRoyalCardGridSlots = [3, 11];
    this.numberCardGrid[6].adjacentRoyalGridSlots = [2, 4];
    this.numberCardGrid[6].verticalAttackSlots = [0, 3];
    this.numberCardGrid[6].horizontalAttackSlots = [7, 8];

    this.numberCardGrid[7].oppositeRoyalCardGridSlots = [null, 10];
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
          //Don't check for matching suit if slot is empty
          if (this.numberCardGrid[i].cards.length > 0) {
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
          } else {
            let emptySlot = this.numberCardGrid[i];
            for (let j = 0; j < emptySlot.adjacentRoyalGridSlots.length; j++) {
              if (
                royalCardGrid[emptySlot.adjacentRoyalGridSlots[j]].cards
                  .length === 0
              ) {
                royalCardGrid[
                  emptySlot.adjacentRoyalGridSlots[j]
                ].element.classList.add("dropzone");
              }
            }
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

            if (this.numberCardGrid[i].cards.length > 0) {
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
            if (this.numberCardGrid[i].cards.length > 0) {
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

        for (
          let i = 0;
          i < highestValueMatchingSlot.adjacentRoyalGridSlots.length;
          i++
        ) {
          if (
            royalCardGrid[highestValueMatchingSlot.adjacentRoyalGridSlots[i]]
              .cards.length === 0
          ) {
            royalCardGrid[
              highestValueMatchingSlot.adjacentRoyalGridSlots[i]
            ].element.classList.add("dropzone");
          }
        }
      } else if (cardInHand.cardType === "numbered") {
        if (canTakeMulligan === false) {
          let matchFound = false;
          for (let i = 0; i < gameManager.numberCardGrid.length; i++) {
            if (gameManager.numberCardGrid[i].cards.length > 0) {
              if (
                gameManager.numberCardGrid[i].cards[0].cardValue <=
                cardInHand.cardValue && gameManager.numberCardGrid[i].cards[0] != cardInHand
              ) {
                gameManager.numberCardGrid[i].element.classList.add("dropzone");
                matchFound = true;
              }
            } else {
              gameManager.numberCardGrid[i].element.classList.add("dropzone");
            }
          }

          if (matchFound === false) {
            //Find the lowest royal of matching suit
            let lowestMatchingRoyalSlot;
            for (let i = 0; i < royalCardGrid.length; i++) {
              if (royalCardGrid[i].cards != 0) {
                if (
                  royalCardGrid[i].cards[0].suit === cardInHand.suit &&
                  royalCardGrid[i].cards[0].isDefeated === false
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
            //Find the lowest royal of matching colour
            if (!lowestMatchingRoyalSlot) {
              for (let i = 0; i < royalCardGrid.length; i++) {
                if (royalCardGrid[i].cards != 0) {
                  if (
                    royalCardGrid[i].cards[0].cardColour ===
                      cardInHand.cardColour &&
                    royalCardGrid[i].cards[0].isDefeated === false
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
                  if (royalCardGrid[i].cards[0].isDefeated === false) {
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
            lowestMatchingRoyalSlot.element.classList.add("dropzone");
          }
        }
        else{
          deck.element.classList.add("dropzone");
        }
      } else if (cardInHand.cardType === "ace") {
        if (cardInHandSlotType === "hand") {
          acesDeck.element.classList.add("dropzone");
          for (let i = 0; i < this.numberCardGrid.length; i++) {
            if(this.numberCardGrid[i].cards.length > 0){
            this.numberCardGrid[i].element.classList.add("dropzone");
            }
          }
        } else if (cardInHandSlotType === "aceDeck") {
          for (let i = 0; i < this.numberCardGrid.length; i++) {
            if(this.numberCardGrid[i].cards.length > 0){
            this.numberCardGrid[i].element.classList.add("dropzone");
            }
          }
        }
      } else if (cardInHand.cardType === "joker") {
        if (cardInHandSlotType === "hand") {
          jokerDeck.element.classList.add("dropzone");
        }
        for (let i = 0; i < this.numberCardGrid.length; i++) {
          this.numberCardGrid[i].element.classList.add("dropzone");
        }
      }
    }
  },
};

$(document).ready(onReady);

function onReady() {
  gameManager.deckSetup();
  gameManager.handSetup();
  gameManager.acesDeckSetup();
  gameManager.jokerDeckSetup();
  gameManager.discardDeckSetup();
  gameManager.generateNumberedCardGrid();
  // gameManager.populateNumberedCardGrid();
  gameManager.generateRoyalCardGrid();

  //  addAllRoyalsToHand();
  // addAllAcesToHand();
  //addAllJokersToHand();

  $( "#play-button" ).click(function() {
    gameManager.populateNumberedCardGrid();
    this.classList.add("hide-element");
    this.style.position = "absolute";
    $("#mull-button").removeClass("hide-element");
    $("#continue-button").removeClass("hide-element");
  });

  $( "#mull-button" ).click(function() {
    gameManager.populateNumberedCardGrid();
    this.classList.add("hide-element");
    $("#continue-button").addClass("hide-element");
    this.style.position = "absolute";
    for(let i = 0 ; i < gameManager.numberCardGrid.length; i ++)
    {
      gameManager.numberCardGrid[i].topCardElement.classList.add("draggable");
    }
  });

  $( "#continue-button" ).click(function() {
    this.classList.add("hide-element");
    $( "#mull-button" ).addClass("hide-element");
    hand.topCardElement.classList.add("draggable");
    firstMoveTaken();
  });

  interact(".draggable").draggable({
    listeners: {
      start(event) {
        // event.target.style.transform = "translate(" + -50 + "%, " + -50 + "%)";
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
        clone = event.target.cloneNode(true);
        clone.classList.add("clone");
        clone.classList.remove("draggable");
        event.target.parentNode.appendChild(clone);
        clone = event.target.parentNode.getElementsByClassName("clone")[0];

        event.target.style.zIndex = 10;
        if (event.target.parentNode.getAttribute("data-slot-type") === "hand") {
          cardInHand = hand.cards[0];
          cardInHandSlotType = "hand";
        } else if (
          event.target.parentNode.getAttribute("data-slot-type") === "aceDeck"
        ) {
          cardInHand = acesDeck.cards[0];
          cardInHandSlotType = "aceDeck";
        } else if (
          event.target.parentNode.getAttribute("data-slot-type") === "jokerDeck"
        ) {
          cardInHand = jokerDeck.cards[0];
          cardInHandSlotType = "jokerDeck";
        } else if (
          event.target.parentNode.getAttribute("data-slot-type") === "numbered"
        ) {
          cardInHand =
            gameManager.numberCardGrid[
              event.target.parentNode.getAttribute("data-grid-index")
            ].cards[0];
          cardInHandSlotType = "numbered";
        }

        gameManager.findValidMoves();
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
      let dropSlotGridIndex = dropzoneElement.getAttribute("data-grid-index");
      let dropSlotType = dropzoneElement.getAttribute("data-slot-type");

      if (dropSlotType === "numbered") {
        let slotRoyalIndexes =
          gameManager.numberCardGrid[dropSlotGridIndex]
            .oppositeRoyalCardGridSlots;
        for (let i = 0; i < slotRoyalIndexes.length; i++) {
          if (royalCardGrid[slotRoyalIndexes[i]] != null) {
            // royalCardGrid[slotRoyalIndexes[i]].element.classList.add("dropzone");
          }
        }
      }
    },
    ondragleave: function (event) {
      var draggableElement = event.relatedTarget;
      var dropzoneElement = event.target;
      // dropzoneElement.style.opacity = 1;
    },
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

      clone.remove();
      // event.relatedTarget.parentNode.removeChild(clone);
      if (dropSlotType === "royal") {
        if (dropItemParentSlotType === "hand") {
          if (royalCardGrid[dropSlotGridIndex].cards.length === 0) {
            royalCardGrid[dropSlotGridIndex].addCardToSlot(hand.cards.shift());
          } else {
            //Add Armour
            
            let armourValue = hand.cards[0].cardValue;
            royalCardGrid[
              dropSlotGridIndex
            ].cards[0].armour += armourValue;
            discardDeck.addCardToSlot(hand.cards.shift());
            discardDeck.updateCardVisuals();
            console.log(discardDeck.cards);
          }

          royalCardGrid[dropSlotGridIndex].updateCardVisuals();
          hand.updateCardVisuals();
        }
      } else if (dropSlotType === "numbered") {
        if (dropItemParentSlotType === "hand") {
          //Add card to slot
          if (hand.cards[0].cardType === "ace") {
            discardDeck.addCardToSlot(hand.cards.shift());
            hand.updateCardVisuals();
            gameManager.numberCardGrid[
              dropSlotGridIndex
            ].shuffleCardsIntoDeck();
          } else if (hand.cards[0].cardType === "joker") {
            discardDeck.addCardToSlot(hand.cards.shift());
            hand.updateCardVisuals();
            gameManager.numberCardGrid[
              dropSlotGridIndex
            ].topCardElement.classList.add("draggable");
          } else {
            gameManager.numberCardGrid[dropSlotGridIndex].addCardToSlot(
              hand.cards.shift()
            );
          }
        } else if (dropItemParentSlotType === "aceDeck") {
          discardDeck.addCardToSlot(acesDeck.cards.shift());
          acesDeck.updateCardVisuals();
          gameManager.numberCardGrid[dropSlotGridIndex].shuffleCardsIntoDeck();
        } else if (dropItemParentSlotType === "jokerDeck") {
          discardDeck.addCardToSlot(jokerDeck.cards.shift());
          jokerDeck.updateCardVisuals();
          gameManager.numberCardGrid[
            dropSlotGridIndex
          ].topCardElement.classList.add("draggable");
        } else if (dropItemParentSlotType === "numbered") {
          gameManager.numberCardGrid[dropSlotGridIndex].addCardToSlot(
            gameManager.numberCardGrid[dropItemParentSlotIndex].cards.shift()
          );
          gameManager.numberCardGrid[
            dropItemParentSlotIndex
          ].updateCardVisuals();
          gameManager.numberCardGrid[
            dropItemParentSlotIndex
          ].topCardElement.classList.remove("draggable");
        }
      } else if (dropSlotType === "aceDeck") {
        if (dropItemParentSlotType === "hand") {
          acesDeck.cards.unshift(hand.cards.shift());
          acesDeck.updateCardVisuals();
          hand.updateCardVisuals();
        }
      } else if (dropSlotType === "jokerDeck") {
        if (dropItemParentSlotType === "hand") {
          jokerDeck.cards.unshift(hand.cards.shift());
          jokerDeck.updateCardVisuals();
          hand.updateCardVisuals();
        }
      } else if (dropSlotType === "deck") {
        deck.cards.push(gameManager.numberCardGrid[dropItemParentSlotIndex].cards.shift());
        let replacementCard = deck.cards.shift();
        while(replacementCard.cardType != "numbered"){
          if(replacementCard.cardType === "royal"){
            hand.cards.unshift(replacementCard);
            hand.updateCardVisuals();
          }
          else if (replacementCard.cardType === "ace")
          {
            acesDeck.cards.unshift(replacementCard);
            acesDeck.updateCardVisuals();
          }
          else if (replacementCard.cardType === "joker")
          {
            jokerDeck.cards.unshift(replacementCard);
            jokerDeck.updateCardVisuals();
          }
          replacementCard = deck.cards.shift();
        }
        gameManager.numberCardGrid[dropItemParentSlotIndex].cards.unshift(replacementCard);
        gameManager.numberCardGrid[dropItemParentSlotIndex].updateCardVisuals();
        hand.topCardElement.classList.add("draggable");
      }

      if (hand.cards.length === 0) {
        let newCard = deck.drawCard();
        hand.cards.unshift(newCard);
        hand.updateCardVisuals();
      }
      if(canTakeMulligan){
        firstMoveTaken();
      }
      
    },
    ondropdeactivate: function (event) {
      event.relatedTarget.style.transform = "translate(0,0)";

      clone.remove();
      event.relatedTarget.setAttribute("data-x", 0);
      event.relatedTarget.setAttribute("data-y", 0);
      event.target.classList.remove("dropzone");
      event.target.classList.remove("drop-active");
    },
  });
}

function returnAllRoyalCards(card) {
  return card.cardType === "royal";
}

function returnAllNonRoyalCards(card) {
  return card.cardType != "royal";
}
function addAllRoyalsToHand() {
  let royalCards = deck.cards.filter(returnAllRoyalCards);
  deck.cards = deck.cards.filter(returnAllNonRoyalCards);
  hand.cards = hand.cards.concat(royalCards);
}

function firstMoveTaken(){
  canTakeMulligan = false;
  for(let i = 0 ; i < gameManager.numberCardGrid.length ; i++){
    gameManager.numberCardGrid[i].topCardElement.classList.remove("draggable");
  }

  for(let i = 0; i < royalCardGrid.length ; i ++){
    royalCardGrid[i].element.classList.remove("hide-element");
  }

  gameManager.state = "placing-royals"
}

function addAllAcesToHand() {
  for (let i = 0; i < deck.cards.length; i++) {
    if (deck.cards[i].cardType === "ace") {
      hand.addCardToSlot(deck.cards[i]);
    }
  }
}

function addAllJokersToHand() {
  for (let i = 0; i < deck.cards.length; i++) {
    if (deck.cards[i].cardType === "joker") {
      hand.addCardToSlot(deck.cards[i]);
    }
  }
}
