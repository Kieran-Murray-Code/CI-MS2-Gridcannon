  Access main [READEME](https://github.com/Kieran-Murray-Code/CI-MS2-Gridcannon/blob/master/README.md) file.


### Manual Testing 

 - **Play Button.**
		 
	 - Button hover works: Border colour, background colour and text change colour on hover and revert when the hover ends.
	 - Click event works: Clicking/Touching the button causes the number gird to populated with number cards, the play button hides itself and reveals the deck area and reset button. The game progresses to the placing of royals phase of the setup and updates the info text.

 - **Reset Button.**
		 
	 - Button hover works: Colour changes on hover and revert when the hover ends.
	 - Click event works: Clicking/Touching the button causes the button to hide itself, cards from all deck slots get added back to the deck and the deck gets shuffled, the deck area hides the play button reapears and the game enter the start state. Works no matter what the board state is.

- **Yes Button.**
		 
	 - Button hover works: Colour changes on hover and revert when the hover ends.
	 - Click event works: Clicking/Touching the button causes the  button to hides itself and the No button. The deck area is made visible and cards in the 3x3 number grid become draggable.

- **No Button.**
		 
	 - Button hover works: Colour changes on hover and revert when the hover ends.
	 - Click event works: Clicking/Touching the button causes the button to hides itself and the Yes button. The deck area becomes visible and the game moves to the game-active state, making the hand, aces and jokers decks top card become draggable.

- **Drag & Drop.**
	- Draggable cards highlight with a green border.
	- OnDrag a clone is made of the draggable element, the clone remains in the original position while the draggable card follows the mouse/finger.
	- OnDrag all valid moves are checked for and highlighted.
	- OnDrop if the card was dropped over a valid target then it gets added to that slot, if it was dropped on an invalid target it returns to the original position then the clone is deleted.

- **Number Of Cards In A Slot.**	
	- When a slot is clicked/tapped an overlay is displayed which shows the number of cards in the slot. 
- **Royal Armour Updating & Royal's Becoming Too Strong.**	
	- When a numbered card is added to a royal slot, the armour value is increaed and the ui is updated to refelct that.
	- When a royals armour plus the card value exceeds  20 the game enters into a game over state, cards can no longer be interacted and the info text is updated to inform the player that they lost.

- **Royal Targetting & Attacks.**	
	- When a numbered card is dragged into a valid move slot then the ui will switch to showing which royals will be attacked if the card is dropped into that slot, the slot that will be used to calculate the attack power will also be highlighted.
	- When a numbered card is dropped into a valid slot on the 3x3 inner grid if fires an attack at the royals opposite the slot using the 2 slots in-between.
- **Royal Damage & Defeat.**	
	- When an attack is made the royal slot checks if its a valid attack, Kings only take an attack if the 2 attack slots are the same suit, Queens only take an attack if the 2 attack slots are the same colour. Jacks take any attack.
	- If the attack is valid then the royal checks if the sum of the 2 attack slots is equal to or greater than the royals value plus the royals armour.
	- If the damage is enough then the royal is defeated and flips over to reveal a surrender flag, that slot is no longer valid for the rest of the game.
	- When all 12 royals are defeated the game enters a game over state and none of the cards can be interacted with. The info text is updated to let the player know they have one as well as what their score is.
- **Deck Shuffle & Draw.**	
	- The Ficher Yates shuffle works and the cards drawn are completey random, resulting in a unquie game state every new game.
	- Whenever a card is sucessfully played from the hand deck then a new card is drawn from the main deck and is added to the hand.
	- When an attempt to draw a card from an empty deck is made the game enters a state where the player can use Ploy cards to try and win the game or restore cards to the deck. If the player has no Ploy cards left and no cards to draw from the deck the game enters a game over state where cards and no longer be interacted with and the info text gets updated to let the player know that they lost the game.






 

### Testing User Stories

#### 1. As a fan of the Tom Francis I wish to learn how to play the game Gridcannon.

#### 2. As a player of the paper version of Gridcannon I wish to be able to play the game digitally when I do not have access to a deck of playing cards or the space to play.
 
#### 3. As a fan of solitaire card games Im looking for a new game to play.

  
#### 4. As a fan of casual relaxing mobile games like Threes I'm looking for a similar but new experience.

  
### HTML & CSS Validation  
#### HTML

The HTML was put through through [https://validator.w3.org/](https://validator.w3.org/).

 - Warning recieved : Consider avoiding viewport values that prevent
   users from resizing documents. (Warning ignored as this is the behaviour that I want.)

#### CSS  

The following errors were found when running were found when running my **CSS** through [https://jigsaw.w3.org/css-validator/validator](https://jigsaw.w3.org/css-validator/validator)

  - Parse Error on an -- variables that were used, this is a non issue as the validator just hasn't been updated to allow variables that are now fully accepted as CSS standard practice.

- Unknown Vendor extension warnings, this is a non issue as these prefixes are required to improve browser compatibility.

These errors have not been fixed as they are they are issue with the validator not being up tp date with current CSS spec.
  

### Browsers
The following browsers were tested for compatiblity
- Google Chrome (Xiaomi Mi Mix 2s (Android) ,Honor 20 (Android), Windows 10 Laptop)
- Firefox (Windows 10 Laptop)
- Opera (Windows 10 Laptop)
- Microsoft Edge (Windows 10 Laptop)
  

#### Issues Found

  

  

I was using svgs which I was getting from [icomoon](https://icomoon.io/) for all the graphical elements so that they would stay a consistent scale within the cards, I had been using CSS classes to change the d attribute of the svg path to change the graphic, this was working the whole time through development as I was testing exclusively in Chrome on both PC and mobile. Unfortunately when I began testing other browsers at the end of development I discovered that Chrome is the only browser that allows the "d" attribute to be changed by css, this meant that my site was only usable in Chrome. To fix this I changed from using SVGs for the icons and instead to generating a custom font with the icons using icomoon](https://icomoon.io/). This fixed the issue and made the graphics display in all browsers, unfortunetly this method isn't as consistant with keeping the way I would like but it functional. The full solution to get scaling to work and also be compatible with all browsers would be to revert to the original svg method but update the "d" attribute using Javascript instead of CSS, unfortunetly I didn't have time to implement this method.