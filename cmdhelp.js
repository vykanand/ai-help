#!/usr/bin/env node

import { GoogleGenerativeAI } from "@google/generative-ai";
import readline from 'readline';
import LocalStorage from "node-localstorage";

const localStorage = new LocalStorage.LocalStorage('./localStorage');
let apiKey;

if (!apiKey) {
    apiKey = localStorage.getItem('geminiApiKey');
    if (!apiKey) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Please enter your Gemini API key (Find it from https://console.cloud.google.com/apis/credentials): ', (key) => {
            apiKey = key.trim();
            localStorage.setItem('geminiApiKey', apiKey);
            rl.close();
            askQuestion(); // Call askQuestion() after the API key is entered
        });
    } else {
        askQuestion(); // Call askQuestion() if the API key is already stored
    }
} else {
    askQuestion(); // Call askQuestion() if the API key is already set
}

async function askQuestion() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter your next question: ', async (question) => {
        if (question.trim().toLowerCase() === 'exit') {
            rl.close();
            return;
        }

        try {
            // Re-initialize the client with the current API key
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
            const chat = model.startChat();
            const result = await chat.sendMessage(question);

            // Check if response is text and handle accordingly
            if (typeof result.response.text === 'function') {
                const responseText = await result.response.text();
                console.log('Received response:', responseText.trim());
            } else {
                throw new Error('Unexpected response format.');
            }

            rl.close();
            askQuestion(); // Call askQuestion recursively to ask for another question
        } catch (error) {
            console.error(`Error with API key ${apiKey}:`, error.message);
            rl.close();
        }
    });
}
