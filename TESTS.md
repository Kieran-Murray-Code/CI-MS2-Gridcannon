
Access main [READEME](https://github.com/Kieran-Murray-Code/CI-MS2-Gridcannon/blob/master/README.md) file.

## Testing

  

  

### Testing User Stories

  

  

#### 1. As a fan of the Tom Francis I wish to learn how to play the game Gridcannon.

  

#### 2. As a player of the paper version of Gridcannon I wish to be able to play the game digitally when I do not have access to a deck of playing cards or the space to play.

  

#### 3. As a fan of solitaire card games Im looking for a new game to play.

  

#### 4. As a fan of casual relaxing mobile games like Threes I'm looking for a similar but new experience.

  

  

### HTML & CSS Validation

  

  

#### HTML

  

  

The following error were found and fixed after running my **HTML** through [https://validator.w3.org/](https://validator.w3.org/)

  

  

#### CSS

  

  

The following errors were found when running were found when running my **CSS** through [https://jigsaw.w3.org/css-validator/validator](https://jigsaw.w3.org/css-validator/validator)

  

  

### Browsers

  

  

The following browsers were tested for compatiblity

  

- Google Chrome (Xiaomi Mi Mix 2s (Android) ,Honor 20 (Android), Windows 10 Laptop)

  

- Firefox (Windows 10 Laptop)

  

- Opera (Windows 10 Laptop)

  

- Microsoft Edge (Windows 10 Laptop)

  

- Internet Explorer 11 (Windows 10 Laptop)

  

  

#### Issues Found

  

I was using svgs which I was getting from [icomoon](https://icomoon.io/) for all the graphical elements so that they would stay a consistent scale within the cards, I had been using CSS classes to change the d attribute of the svg path to change the graphic, this was working the whole time through development as I was testing exclusively in Chrome on both PC and mobile. Unfortunately when I began testing other browsers at the end of development I discovered that Chrome is the only browser that allows the "d" attribute to be changed by css, this meant that my site was only usable in Chrome. To fix this I changed from using SVGs for the icons and instead to generating a custom font with the icons using icomoon](https://icomoon.io/). This fixed the issue and made the graphics display in all browsers, unfortunetly this method isn't as consistant with keeping the way I would like but it functional. The full solution to get scaling to work and also be compatible with all browsers would be to revert to the original svg method but update the "d" attribute using Javascript instead of CSS, unfortunetly I didn't have time to implement this method.