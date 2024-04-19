# Chatbot

A simple JavaScript chatbot implementation.

## Overview

This chatbot is implemented in JavaScript and allows for basic conversation handling. It can recognize commands, ask questions, and respond accordingly based on predefined conversation flows.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/AdieCode/CCB--command-controled-bot.git
   ```

2. Navigate to the project directory:

   ```
   cd CCB--command-controled-bot
   ```

## Getting started

### Import the class
+ Import the class and create an new inctance.

```javascript
const Bot = require('../modules/bot')
const myBot = new Bot;
```

### Create functions
+ create functions to handel user input and bot logic.

```javascript
function askWord(){
    myBot.next()  // to proceed to the next function
    return 'please enter a word' // return bot response
}

function repeatWord(){
    const word = myBot.userInput; //retrieve user input 

    if (isName(word)){ // validate input
        myBot.next() // proceed to the next function in the list if there is one
        return `your word was: ${word}` // return bot response
    } else {
        return 'Sorry could you please enter a word'
    }

}
```

### Load functions into bot
+ Give the bot the functions in the following way. 
+ Command will automatically be created when the first step is added.

```javascript
// adding the functions to handle the '/word' command, one by one

myBot.addStep('/word',askWord); // step 1
myBot.addStep('/word',repeatWord); // step 2

// or 

myBot.addStep('/word',[askWord, repeatWord]); // add in an array of functions

```

### Interact with bot
+ call the respond method and provide an input to recieve the bot's response.

```javascript
const wordToGive = 'hello';

console.log('Conversation with /word command')
console.log('======================================')
console.log('bot: ' + myBot.respond('/word'))
console.log('-------------------------------')
console.log("user: " + wordToGive)
console.log('-------------------------------')
console.log('bot: ' + myBot.respond(wordToGive))
console.log('======================================\n')
```

#### Output:
```
Conversation with bot
=========================
bot: please enter a word
------------------------
user: hello
------------------------
bot: your word was: hello
=========================
```
