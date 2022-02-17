
# [GRIDCANNON - PLAY HERE](https://kieran-murray-code.github.io/CI-MS2-Gridcannon/index.html)

  

This is an assignment project for [https://codeinstitute.net/](https://codeinstitute.net/). The project aims to develop digital mobile compatible version of a solitaire card game designed by Tom Francis using HTML, CSS & Javascript. See Tom's design here -[Tom Francis Grid Cannon](https://www.pentadact.com/2019-08-20-gridcannon-a-single-player-game-with-regular-playing-cards/)

  

  

  

## Table of Contents

  

  

1.  [UX](#ux)

  

  

	*  [Design Choices](#design-choices)

  

  

	*  [User Stories](#user-stories)

  

  

2.  [Features](#features)
	* [Features To Implement](#features-to-implement)

  
3. [Wireframes](#wireframes)
  

4.  [Technologies Used](#techmologies-used)

  

  

	*  [Languages](#languages)

  

  

	*  [Libraries](#libraries)

  

  

*  [Tools](#tools)

  

  

4.  [Deploymet](#deployment)

  

  

6.  [Testing](#testing)

  

  

7.  [Credits](#credits)

  

  

8.  [Disclaimer](#disclaimer)

  

  

  

  

## UX:

### Design choices

With a mobile first approach in mind I wanted to the UI of the game to be sharp and readable on small phones, I had a look at a lot of mobile card games and found that I liked the look of [Threes](http://play.threesgame.com/) by Sirvo and decided that I wanted a similar minimal graphic style and colour pallette.

<div  align="center">  <img  src="http://asherv.com/threes/images/THREES_trailer.gif"></div>

I decided to go with SVG graphics and text so that everything would stay sharp and clear no matter the screen size, all graphic elements being SVG based would also make loading times quick and mobile friendly. I also decided to go with HTML elements, CSS styling and Bootstrap for a fully responsive mobile friendly game instead of using HTML Canvas .

  

### User Stories

1. As a fan of the Tom Francis's games I wish to learn how to play the game Gridcannon.

2. As a player of the paper version of Gridcannon I wish to be able to play the game digitally when I do not have access to a deck of playing cards or the space to play.

3. As a fan of casual relaxing mobile games like Threes I'm looking for a similar but new experience.

  

  

  

  

## Features:

  

- Each page has a responsive navigation bar that collapses down to a hamburger menu when on small screen sizes. The navigation bar contains the game name and the site navigation links.

- Fisher Yates shuffle algorithm is used to shuffle the deck to ensure a complete unique game on each replay. The deck is shuffled at the start of each game as well as anytime that cards are added back into the deck.

- Inital setup is automated as much as possible to make the starting of a new game quick and easy for the user. All the numbered cards drawn are placed on the 3x3 number grid until it is full, any royals drawn are placed in hand, any Aces drawn are placed in the Aces deck and any Jokers drawn are placed in the Jokers deck. Royals can not be automatically placed as some may have multiple correct slots and choosing which slot to place it in is part of the the gameplay.

- Any moveable cards are highlighted to show the user what can be interacted with so there is no confusion over what can and can't be moved.

- All valid moves are found and highlighted, when a user moves a card any slots that the card can be dropped into are highlighted.

- All attacks are highlighted, when a user drags a numbered card onto a valid move on the number grid then the the valid move highlight switches from showing which slots the card can be dropped into to showing which royal card slots will be attacked.

- Visual feedback for the number of cards in a slot, by clicking on a slot the ui for the number of cards gets toggled on/off.

- A restart button allows the user to quickly start a new game without having to refresh the browser.
- Overall the site features a fully functional digital version of the card game Gridcannon that can be played to a win or lose state. It adds features that are only possible with the digital version such as move highlighting and rules enforcing to help new players play correctly.

### Features To Implement

  

- Add audio sound effects - Currently there is no sound effects, adding sound effects would give another layer of feedback to the player.

- Add music - The same as with the sound effects, adding background music would add to the overall experience and make the game more enjoyable.

- Add animations - Although I'm happy with the overall aesthetics of the game, some more animations for extra layers of feedback would make for a more professional finish.

- Interactive tutorial - Learning to play takes a little bit of time and is a lot of information to take in for the user, it's also a lot of information to display to the user and the How To Play page contains a lot text. Having an interactive tutorial where the player learns to play directly while interacting with the game would make things a lot more clear and would allow the site to just contain the game page and have it act from like an app.

- Highscore - At the moment the players score is displayed in an message when they win the game. Adding the ability to store a players highest score would give the player an incentive to come back to try and beat it.

  

### Wireframes

Below are wireframes for the site developed in [Balsamiq](https://balsamiq.com/)
-  [PLAY PAGE](https://github.com/Kieran-Murray-Code/CI-MS2-Gridcannon/blob/master/wireframes/Gridcannon_Play.png)

  

## Technologies Used

  

### Languages

-  [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)

-  [CSS3](https://developer.mozilla.org/en-US/docs/Archive/CSS3)

-  [Javascript](https://www.javascript.com/)

### Libraries

-  [jQuery](https://jquery.com/)

-  [InteractJS](https://interactjs.io/) - The project used InteractJS for a mobile friendly drag and drop

### Tools

-  [Visual Studio Code](https://code.visualstudio.com/) - The project used the **Visual Studio** IDE to develop the website linked with **Github** for version control.

-  [Bootstrap 4](https://getbootstrap.com/) - The project used the **Bootstrap 4** for a responsive grid system.

-  [Favicon.io](https://favicon.io/favicon-converter/) - The project used the **Favicon.io** the favicon icons or the site.

-  [Autoprefixer CSS](https://autoprefixer.github.io/) - The project used the **Autoprefixer CSS** to ensure CSS compatibility with all browsers.

-  [HTML Validator](https://validator.w3.org/) - The project used the **HTML Validator** to validate and find errors in the HTML.

-  [CSS Validator](https://jigsaw.w3.org/css-validator/) -The project used the **CSS Validator** to validate and find errors in the CSS.

-  [EsLint](https://eslint.org/) - EsLint was used to find and fix issues in the Javascript.

-  [icomoon](https://icomoon.io/) - icomoon was used was the graphically elements.

-  [Balsamiq](https://balsamiq.com) https://balsamiq.com) -The project used the **Balsamiq** to generate wireframes for the site.

-  [Stack Edit](https://stackedit.io/) - Used to edit the README.md & TESTS.md.

-  [ScreenToGif](https://www.screentogif.com/)

-  [Photoshop](https://www.adobe.com/ie/products/photoshop.html?sdid=88X75SKS&mv=search&ef_id=EAIaIQobChMIp_2G7f7l6gIVwuvtCh3caAYVEAAYASAAEgJ_a_D_BwE:G:s&s_kwcid=AL!3085!3!441704131147!e!!&gclid=EAIaIQobChMIp_2G7f7l6gIVwuvtCh3caAYVEAAYASAAEgJ_a_D_BwE)

  
  

  

  

  

## Deployment

  

  

  

#### To deploy a live version of this site using Github the following steps are needed..

  

  

  

1. Log into Github.

  

  

  

2. User Dropdown > Your Repositories.

  

  

  

3. Select the repository for this project [https://github.com/Kieran-Murray-Code/CI-MS2-Gridcannon](https://github.com/Kieran-Murray-Code/CI-MS2-Gridcannon).

  

  

  

4. From the repository top menu select [Settings](https://github.com/Kieran-Murray-Code/CI-MS2-Gridcannon/settings)

  

  

  

5. In [Settings](https://github.com/Kieran-Murray-Code/CI-MS2-Gridcannon/settings) scroll down to the Github pages section.

  

  

  

6. In the Github pages section, for Source select master branch.

  

  

  

7. In the Github pages section, for Theme leave blank.

  

  

  

8. In the Github pages section, for Custom Domain leave blank.

  

  

  

9. In the Github pages section, tick Enforce HTTPS, this is required when you are using the default domain.

  

  

  

10. After the [Settings](https://github.com/Kieran-Murray-Code/CI-MS2-Gridcannon/settings) refreshes the Github Pages section will contain a link to the live site. [https://kieran-murray-code.github.io/CI-MS2-Gridcannon/](https://kieran-murray-code.github.io/CI-MS2-Gridcannon/).

  

  

  

Currently there are no differences between the delayed branch and master branch.

  

  

  

#### To deploy a local version the following steps are required.

  

  

  

1. Git can clone a repository using $ git clone https://github.com/User/Repository-To-Clone

  

  

  

2. Use the above command in Git Bash in your IDE such as Visual Studio Code

  

  

  

3. To get the url for cloning this repository go to [CI-MS2-Gridcannon](https://github.com/Kieran-Murray-Code/CI-MS2-Gridcannon)

  

  

  

4. Click on the Clone or Download button.

  

  

  

5. Copy the link from Clone with the HTTPS section.

  

  

  

6. Use the command in step 1 in Git Bash, add the correct url and hit enter.

  

  

  

7. You now have a local copy of the repository.

  

  

  

8. More information on cloning a Git Repository can be found [here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository).

  

  

  

9. Once you have a local version pulled from Github, browse to that directory using your OS's file browser, locate index.html in the root directory of the project and open it with your internet browser of choice.

  

  

## Testing

  

Testing documented is a separate [TESTS](https://github.com/Kieran-Murray-Code/CI-MS2-Gridcannon/blob/master/TESTS.md) file.

  

## Credits

- Game design by [Tom Francis](https://twitter.com/Pentadact) & [Chris Thursten](https://twitter.com/CThursten).

-  [Gridcannon Rules](https://www.pentadact.com/2019-08-20-gridcannon-a-single-player-game-with-regular-playing-cards/).

-  [Web version of Gridcannon ](https://herebemike.github.io/Gridcannon/site/) developed by [HereBeMike](https://twitter.com/HereBeMike).

  

## Disclaimer

**For educational purposes.**

  

Use of the Gridcannon rules allowed by Tom Francis is his original [post](https://www.pentadact.com/2019-08-20-gridcannon-a-single-player-game-with-regular-playing-cards/).

  

> If you’d like to make/release/sell a game based on this Please do! I’d

> suggest saying “Based on Gridcannon by Tom Francis” somewhere in the

> credits – a link to this post would be cool if possible. I’d also

> suggest not calling it just ‘Gridcannon’, but it’s fine to use that

> word in the title. If you’re going to charge for it, maybe think about

> if there’s something you’d like to add to the game. Could just be

> theme/art/flash, or perhaps a mechanics change? Do you like that you

> can’t really fail the game? Do you have a better idea for scoring it?

> Should Jokers do something different? This is just a quick prototype,

> it has lots room for improvement. And digital versions let you do

> things I couldn’t with cards – prevent bad deals, know which stacks

> have resets, start with a more specific grid setup, reward

> achievements… Also a heads up that a nearly complete digital version

> is up, free, and playable in browser

>  [here](https://herebemike.github.io/Gridcannon/site/) by

>  [@HereBeMike](https://twitter.com/HereBeMike).
