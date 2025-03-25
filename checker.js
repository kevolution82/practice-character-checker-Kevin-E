// Kevin Edwards
// practice-character-checker-Kevin-E

const readlineSync = require('readline-sync');

// Prompt user for a word or phrase
const userInput = readlineSync.question("Enter a word or phrase: ");

// Prompt user for an index number
const index = readlineSync.questionInt("Enter an index number to find the character at that position: ");

// Check if the index is valid
if (index >= 0 && index < userInput.length) {
    // Use bracket notation to access the character
    const character = userInput[index];
    console.log(`The character at index ${index} is: '${character}'`);
} else {
    console.log("Invalid index. Please enter a number between 0 and " + (userInput.length - 1));
}
