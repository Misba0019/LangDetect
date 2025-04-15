import { franc } from 'franc'; // Import the 'franc' library for language detection
import langs from 'langs';     // Import the 'langs' library to get language names from codes
import colors from 'colors';   // Import the 'colors' library to add color to console outputs

const input = process.argv[2]; // Get the input text from the command line arguments

// Check if the input is too short
if (!input || input.length < 20) {
    console.log(colors.yellow("Please provide a longer text sample (at least 20 characters) for better accuracy."));
    process.exit();
}

const langCode = franc(input); // Detect the language code from the input text
console.log(colors.yellow(`Detected language code: ${langCode}`)); // Debugging log

// Check if the language code is 'und' or if the detected language has low confidence
if (langCode === 'und') {
    console.log(colors.red("Sorry, Couldn't figure it out! Try with More Sample Text"));
} else {
    const language = langs.where("3", langCode); // Get the language name from the code
    if (language) {
        console.log(colors.green(`The language appears to be: ${language.name}`)); // Get the language name
    } else {
        console.log(colors.red(`Sorry, couldn't find a language for Code: ${langCode}. This might be an uncommon or unsupported language. Try providing more text for better accuracy.`)); // Handle undefined language code
    }
}