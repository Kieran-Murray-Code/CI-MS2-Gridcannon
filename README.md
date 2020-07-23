
  

  

  

  

# [GRIDCANNON - A SOLITAIRE CARD GAME]([https://kieran-murray-code.github.io/CI-MS2-Gridcannon/](https://kieran-murray-code.github.io/CI-MS2-Gridcannon/))

  

  

  

  

This is an assignment project for [https://codeinstitute.net/](https://codeinstitute.net/). The project aims to develop digital mobile compatible version of a solitaire card game designed by Tom Francis using HTML, CSS & Javascript. See Tom's design here -[Tom Francis Grid Cannon](https://www.pentadact.com/2019-08-20-gridcannon-a-single-player-game-with-regular-playing-cards/)

  

## Table of Contents

1.  [UX](#ux)

*  [Design Choices](#design-choices)

*  [User Stories](#user-stories)

2.  [Features](#features)

*  [Common](#common)

*  [Play](#play)

3.  [Technologies Used](#techmologies-used)

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

  

![Threes](http://asherv.com/threes/images/THREES_trailer.gif)

  

  

I decided to go with SVG graphics and text so that everything would stay sharp and clear no matter the screen size, all graphic elements being SVG based would also make loading times quick and mobile friendly.

  

  

  

### User Stories

  

1. As a fan of the Tom Francis I wish to learn how to play the game Gridcannon.

  

2. As a player of the paper version of Gridcannon I wish to be able to play the game digitally when I do not have access to a deck of playing cards or the space to play.

  

3. As a fan of solitaire card games Im looking for a new game to play.

  

4. As a fan of casual relaxing mobile games like Threes I'm looking for a similar but new experience.

  

  

## Features:

  

### Common Features

  

- Each page has a responsive navigation bar that collapses down to a hamburger menu when on small screen sizes. The navigation bar contains the game name and the site navigation links.

  

### Home

  

### How To Play

  

### Play

  

- Fisher Yates shuffle algorithm is used to shuffle the deck to ensure a complete unique game on each replay. The deck is shuffled at the start of each game as well as anytime that cards are added back into the deck.

  

- Inital setup is automated as much as possible to make the starting of a new game quick and easy for the user. All the numbered cards drawn are placed on the 3x3 number grid until it is full, any royals drawn are placed in hand, any Aces drawn are placed in the Aces deck and any Jokers drawn are placed in the Jokers deck. Royals can not be automatically placed as some may have multiple correct slots and choosing which slot to place it in is part of the the gameplay.

  

- Any moveable cards are highlighted to show the user what can be interacted with so there is no confusion over what can and can't be moved.

  

- All valid moves are found and highlighted, when a user moves a card any slots that the card can be dropped into are highlighted.

  

- All attacks are highlighted, when a user drags a numbered card onto a valid move on the number grid then the the valid move highlight switches from showing which slots the card can be dropped into to showing which royal card slots will be attacked.

  

- Visual feedback for the number of cards in a slot, by clicking on a slot the ui for the number of cards gets toggled on/off.

  

### Features To Implement

 - Add audio sound effects.
 - Add music.
 - Add animations.

  

  

### Wireframes

  

Below are wireframes for the site developed in [https://balsamiq.com/](https://balsamiq.com/)

  

Each images contains a wireframe for the mobile and desktop versions of the site.

  

-  [Home Page](https://github.com/Kieran-Murray-Code/CI-MS1-Portishead-Website/blob/master/wireframes/MS1%20Home%20Page.png)

  

## Technologies Used

  

### Languages

  

  

-  [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)

  

-  [CSS3](https://developer.mozilla.org/en-US/docs/Archive/CSS3)

  

-  [Javascript](https://www.javascript.com/)

  

### Libraries

  

-  [jQuery](https://jquery.com/)

  

-  [InteractJS](https://interactjs.io/) - The project used InteractJS for a mobile friendly drag and drop.

  

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

  

9. Once you have a local version pulled from Github, browse to that directory using your OS's file borwser, locate index.html in the root directory of the project and open it with your internet browser of choice.

## Testing
Testing documented is a separate [TESTS](https://github.com/Kieran-Murray-Code/CI-MS2-Gridcannon/blob/master/TESTS.md) file.

## Credits

  

### Content

  

### Media

  

#### Home Page

  

### Code

  

### Acknowledgements

  

## Disclaimer