# ai-help

ai-help is a command-line interface (CLI) application that allows you to interact with an AI model and get responses to your questions. It uses the `gemini-pro` model from the `genAI` library.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (version 12 or later)
- npm (Node Package Manager)

## Installation

1. git clone https://github.com/vykanand/ai-help.git
2. Open a terminal and navigate to the project directory.
3. Browse utils folder and paste GEMINI API KEY from - // Get your API key from https://makersuite.google.com/app/apikey
3. Run the following command to install the required dependencies:

4. To start the application, run the following command in your terminal:
```
npm install .

```

Now in the cmd or bash terminal you can run the ai agent and ask your questions and get answers in terminal.
type this command
```
ai "YOUR_QUESTION"
```

The application will prompt you to enter your question. Type your question and press Enter.

To exit the application, type `exit` and press Enter.

## Features

- **Interactive CLI**: The application provides an interactive command-line interface where you can enter your questions.
- **AI Model Integration**: It uses the `gemini-pro` model from the `genAI` library to generate responses to your questions.
- **Colored Output**: The application uses the `chalk` library to display colored output for better readability.
- **Input Validation**: The application checks if the entered question is empty and prompts you to enter a valid question if it is.
- **Error Handling**: If an error occurs while generating the response, the application will display an error message.

## Dependencies

The project relies on the following dependencies:

- `genAI`: A library for generating AI responses.
- `readline`: A Node.js module for creating interactive command-line interfaces.
- `chalk`: A library for adding colors to the terminal output.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
