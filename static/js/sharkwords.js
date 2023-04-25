const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

const numWrong = 0;

// Loop over the letters in `word` and create divs.
// The divs should be appended to the section with id="word-container".
//
// Use the following template string to create each div:
// `<div class="letter-box ${letter}"></div>`
//
const createDivsForChars = (word) => {
  // Replace this with your code

  for (let letter of word) {
        // queryselector word-container insertadjacentHTML(beforeend, 
        // `<div class="letter-box ${letter}"></div>`
      document.getElementById('word-container').insertAdjacentHTML('beforeend', `<div class="letter-box ${letter}"></div>`);
  }
};

// Loop over each letter in the alphabet and generate a button for each letter
// The buttons should be appended to the section with id="letter-buttons".
const generateLetterButtons = () => {
  // Replace this with your code
  // queryselector letter-buttons insertadjacentHTML(beforeend, 
  // '<button class='letter-buttons ${letter}'>${letter}</button>' 
  for (let letter of ALPHABET) {
    document.getElementById("letter-buttons").insertAdjacentHTML('beforeend', 
      `<button class="letter-buttons ${letter}">${letter}</button>`);
  }
};

// Set the `disabled` property of `buttonEl` to true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  // Replace this with your code
  // if letter button is clicked, buttonEl == true
  //document.getElementById("disabled").setAttribute('disabled', 'true')
  // document.getElementsByClassName(`button.letter-buttons.${letter}`).disabled = true
  buttonEl.disabled = true


};

// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works

const isLetterInWord = (letter, word) => {
  // Replace this with your code
};

// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess
  // You can change this to choose a random word from WORDS once you
  // finish this lab but we hard code it so we know what the word is
  // and can tell if things look correct for this word
  const word = 'hello';

  createDivsForChars(word);

  generateLetterButtons();

  // in the next lab, you will be adding functionality to handle when
  // someone clicks on a letter
})();
