const Bot = require('../modules/bot')
const myBot = new Bot;

function askWord(){
    myBot.next()
    return 'please enter a word:';
}

function repeatWord(){
    const word = myBot.userInput;

    if (isName(word)){
        myBot.next()
        return `your word was: ${word}`
    } else {
        return 'Sorry could you please enter a word'
    }
    

}

function greetFunc(){
    myBot.next()
    return 'hey there what is your name'
}

function greetbyname(){
    const name = myBot.userInput;

    if (isName(name)){
        myBot.data.name = name;
        myBot.next()
        return `Hi ${name}, nice to meet you :)\n     how are you(good/bad)`
    } else {
        return 'Sorry could you please enter a name'
    }
    
}

function reastToUser(){
    const name = myBot.data.name;
    const userResponse = myBot.userInput;

    if (userResponse === 'good'){
        myBot.next()
        return `i'm happy to hear that ${name}.`
    } else if (userResponse ===''){
        return `i'm sorry to hear that ${name}`
    } else {
        return 'Sorry could you please enter only "good" or "bad" '
    }
    
}

function isName(name){
    if(name.includes(" ")){
        return false
    }
    
    return true
}

// adding the functions to handle the '/word' command, one by one
myBot.addStep('/word',askWord);
myBot.addStep('/word',repeatWord);


// adding the functions to handle the '/greet' command with an array.
myBot.addStepArray('/greet',[greetFunc,greetbyname,reastToUser])



// for testing
/////////////////////////////////////
////////////////////////////////////
///////////////////////////////////

const wordToGive = 'word';
const nameToGive = 'Jhon';
const feelingtoGive = 'good';

console.log('\nConversation with /word command')
console.log('======================================')
console.log('bot: ' + myBot.respond('/word'))
console.log('-------------------------------')
console.log("user: " + wordToGive)
console.log('-------------------------------')
console.log('bot: ' + myBot.respond(wordToGive))
console.log('======================================\n')

console.log('\nConversation with /greet command')
console.log('======================================')
console.log('bot: ' + myBot.respond('/greet'))
console.log('-------------------------------')
console.log('bot: ' + myBot.respond('Jhon the man'))
console.log('-------------------------------')
console.log("user: " + nameToGive)
console.log('-------------------------------')
console.log('bot: ' + myBot.respond(nameToGive))
console.log('-------------------------------')
console.log('bot: ' + myBot.respond('were'))
console.log('-------------------------------')
console.log("user: " + feelingtoGive)
console.log('-------------------------------')
console.log('bot: ' + myBot.respond(feelingtoGive))
console.log('======================================\n')
