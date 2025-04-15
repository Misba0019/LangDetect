# Lang-Detect-Tool

A simple command-line tool to detect the language of a given text using the `franc` library for language detection, `langs` for mapping language codes to names, and `colors` for colorful console outputs.

## Features

- Detects the language of input text based on statistical analysis.
- Provides the language name and ISO 639-3 code.
- Handles cases where the language cannot be determined or is unsupported.
- Encourages users to provide longer text for better accuracy.
- Outputs results in a visually appealing format using colors.

## Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/Misba0019/lang-detect-tool.git
   cd lang-detect-tool
   

2. Install dependencies:
   ```bash
   npm install

3. Run the tool:
   ```bash
   node index.js "Your text here"

- Example: 
  ```bash
  node index.js "Hello, this tool can guess different languages."

- Output: 
  ```bash
  Detected language code: eng
  The language appears to be: English

## Requirements

- Node.js (version 18 or higher)

## Libraries Used

- [franc](https://www.npmjs.com/package/franc): For detecting the language code.

- [langs](https://www.npmjs.com/package/langs): For mapping language codes to human-readable names.

- [colors](https://www.npmjs.com/package/colors): For adding color to console outputs.

## How It Works

1. The tool takes a text input from the command line.

2. It uses the `franc` library to detect the language code.

3. The `langs` library maps the detected code to a language name.

4. If the language cannot be determined (`und`) or is unsupported, the tool provides feedback to the user.

## Limitations

- Short or ambiguous text may result in incorrect or undefined language detection.

- Some uncommon languages may not be supported by the `langs` library.

## Credits

- Powered by the open-source libraries [franc](https://github.com/wooorm/franc/tree/main), [langs](https://github.com/adlawson/nodejs-langs), and [colors](https://github.com/Marak/colors.js).

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
