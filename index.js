// Import libraries
import { franc } from 'franc';
import langs from 'langs';
import colors from 'colors';

// Get the input text from the command line arguments
const input = process.argv[2];

// Check if the input is too short
if (!input || input.length < 20) {
    console.log(colors.yellow("Please provide a longer text sample (at least 20 characters) for better accuracy."));
    process.exit();
}

const langCode = franc(input); // Detect the language code from the input text
console.log(colors.yellow(`Detected language code: ${langCode}`));

// Check if the language code is 'und' or if the detected language has low confidence
if (langCode === 'und') {
    console.log(colors.red("Sorry, Couldn't figure it out! Try with More Sample Text"));
} else {
    const language = langs.where("3", langCode);
    if (language) {
        console.log(colors.green(`Detected Language: ${language.name}`));
    } else {
        console.log(colors.red(`Unrecognized language code: ${langCode}. Try providing more or clearer text.`));
    }
}